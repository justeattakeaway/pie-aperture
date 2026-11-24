#!/usr/bin/env node

import { execFile } from 'child_process';
import fs from 'fs';
import path from 'path';
import { promisify } from 'util';

const execFileAsync = promisify(execFile);

const workingDir = process.cwd();

const RETRY_DELAYS_SECONDS = [15, 30, 60, 90, 120];

function log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`);
}

function logError(message) {
    console.error(`[${new Date().toISOString()}] ${message}`);
}

// Function to check if the script is run from the correct directory
function verifyRootDirectory(expectedPackageName) {
    const packageJsonPath = path.join(workingDir, 'package.json');
    if (!fs.existsSync(packageJsonPath)) {
        console.error("Error: package.json not found. Please run this script from the root directory of your project.");
        process.exit(1);
    }

    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    if (packageJson.name !== expectedPackageName) {
        console.error(`Error: This script should be run from the root directory of '${expectedPackageName}'.`);
        process.exit(1);
    }
}

verifyRootDirectory('pie-aperture'); // Ensure the script is run from the root directory of 'pie-aperture'

const subProjects = ['nuxt-app', 'vanilla-app'];

function readDependencies(filePath) {
    const dependenciesSet = new Set();
    if (fs.existsSync(filePath)) {
        const packageJson = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        const allDependencies = {...packageJson.dependencies, ...packageJson.devDependencies};
        for (const key of Object.keys(allDependencies)) {
            if (key.startsWith('@justeattakeaway/')) {
                dependenciesSet.add(key);
            }
        }
    }
    return dependenciesSet;
}

function collectDependencies() {
    const allDependencies = new Set();
    subProjects.forEach(subProject => {
        const packageJsonPath = path.join(workingDir, subProject, 'package.json');
        const deps = readDependencies(packageJsonPath);
        deps.forEach(dep => allDependencies.add(dep));
    });
    return allDependencies;
}

const snapshotVersion = process.argv[2];
const packagesToUpdate = new Set(process.argv.slice(3));
const versionTag = `0.0.0-snapshot-release-${snapshotVersion}`;

if (!snapshotVersion || !/^\d{14}$/.test(snapshotVersion)) {
    console.error("Error: Invalid or missing snapshot version. Please provide a snapshot version in the format YYYYMMDDHHMMSS (e.g., 20240416153654).");
    process.exit(1);
}

if (!packagesToUpdate.size) {
    console.error("Error: No packages specified for update.");
    process.exit(1);
}

const allDependencies = collectDependencies();
const basePackages = new Set([...allDependencies].filter(name => packagesToUpdate.has(name)));

async function yarn(args) {
    const command = `yarn ${args.join(' ')}`;
    try {
        const { stdout } = await execFileAsync('yarn', args, { cwd: workingDir, maxBuffer: 20 * 1024 * 1024 });
        log(`${command} succeeded`);
        console.log(stdout);
        return stdout;
    } catch (error) {
        logError(`${command} failed (exit code ${error.code})`);
        if (error.stdout) console.error(error.stdout);
        if (error.stderr) console.error(error.stderr);
        throw error;
    }
}

async function yarnWithRetries(args) {
    for (let attempt = 0; ; attempt += 1) {
        try {
            return await yarn(args);
        } catch (error) {
            const delay = RETRY_DELAYS_SECONDS[attempt];
            if (delay === undefined) {
                throw error;
            }
            log(`Retrying in ${delay}s (retry ${attempt + 1} of ${RETRY_DELAYS_SECONDS.length})`);
            await new Promise((resolve) => setTimeout(resolve, delay * 1000));
        }
    }
}

async function updatePackages() {
    log('Starting the update process');

    if (!basePackages.size) {
        log('No matching packages found in the repository, so adding the specified packages to each sub-project.');
        for (const subProject of subProjects) {
            for (const packageName of packagesToUpdate) {
                log(`Adding ${packageName}@${versionTag} to ${subProject}`);
                await yarnWithRetries(['workspace', subProject, 'add', `${packageName}@${versionTag}`]);
            }
        }
    } else {
        for (const packageName of basePackages) {
            log(`Updating ${packageName} to ${versionTag}`);
            await yarnWithRetries(['up', `${packageName}@${versionTag}`, '--mode=update-lockfile']);
        }
    }

    log('Running yarn install');
    await yarn(['install']);

    log('Update process completed.');
}

updatePackages().catch((error) => {
    logError(`Update failed: ${error.message}`);
    process.exitCode = 1;
});
