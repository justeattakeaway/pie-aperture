#!/usr/bin/env node

import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';

const workingDir = process.cwd();

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

const subProjects = ['nuxt-app', 'vanilla-app', 'nextjs-app'];

function readDependencies(filePath) {
    if (fs.existsSync(filePath)) {
        const packageJson = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        return { ...packageJson.dependencies, ...packageJson.devDependencies };
    }
    return {};
}

function collectDependencies() {
    const allDependencies = new Set();
    subProjects.forEach(subProject => {
        const packageJsonPath = path.join(workingDir, subProject, 'package.json');
        const deps = readDependencies(packageJsonPath);
        Object.keys(deps).forEach(key => {
            if (key.startsWith('@justeattakeaway/')) {
                allDependencies.add(key);
            }
        });
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

let updateSuccessful = false;

function yarnInstall(packageName) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] Attempting to update ${packageName} with version ${versionTag}`);
    const command = `yarn up ${packageName}@${versionTag} --mode=update-lockfile`;
    return new Promise((resolve, reject) => {
        exec(command, { cwd: workingDir }, (error, stdout, stderr) => {
            if (error) {
                console.error(`[${timestamp}] Error updating ${packageName}: ${error}`);
                console.error(`[${timestamp}] stderr: ${stderr}`);
                reject(error);
            } else {
                console.log(`[${timestamp}] Successfully updated ${packageName}: ${stdout}`);
                updateSuccessful = true;
                resolve(stdout);
            }
        });
    });
}

async function installPackages() {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] Starting the update process`);

    if (!basePackages.size) {
        console.error("Error: No matching packages found in the repository for the provided arguments.");
        process.exit(1);
    }

    for (let packageName of basePackages) {
        try {
            await yarnInstall(packageName);
        } catch (error) {
            console.error(`[${timestamp}] Failed to update ${packageName}: ${error.message}`);
        }
    }

    if (updateSuccessful) {
        console.log(`Updates were successful, running yarn install...`);
        const installCommand = `yarn install`;
        exec(installCommand, { cwd: workingDir }, (error, stdout) => {
            if (error) {
                console.error('Failed to complete yarn install:', error);
            } else {
                console.log('Yarn install completed successfully.');
            }
        });
    } else {
        console.log('No packages were updated.');
    }

    console.log(`[${timestamp}] Update process completed.`);
}

installPackages();
