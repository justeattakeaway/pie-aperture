#!/usr/bin/env node

import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';

// Read and parse package.json
const packageJsonPath = path.join(process.cwd(), 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
const dependencies = packageJson.dependencies || {};
const devDependencies = packageJson.devDependencies || {};
const allDependencies = Object.assign({}, dependencies, devDependencies);

// Snapshot version as the first command-line argument
const snapshotVersion = process.argv[2];
const packagesToUpdate = process.argv.slice(3);

// Filter for packages that are in the list of packages to update and start with @justeattakeaway/pie-
const basePackages = Object.keys(allDependencies).filter(name =>
    packagesToUpdate.includes(name) && name.startsWith('@justeattakeaway/pie-')
);

// Flag to check if any package was successfully updated
let updateSuccessful = false;

// Function to execute yarn install for a specific package
function yarnInstall(packageName) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] Starting installation for ${packageName} with snapshot version ${snapshotVersion}`);
    return new Promise((resolve, reject) => {

        const command = `yarn up ${packageName}@0.0.0-snapshot-release-${snapshotVersion} --mode=update-lockfile`;

        exec(command, (error, stdout, stderr) => {
            if (error) {
                console.warn(`[${timestamp}] Error installing ${packageName}: ${error}`);
                console.warn(`[${timestamp}] stderr: ${stderr}`);
                reject(error);
            } else {
                console.log(`[${timestamp}] Successfully installed ${packageName}: ${stdout}`);
                updateSuccessful = true; // Set flag if any package successfully updated
                resolve(stdout);
            }
        });
    });
}

// Function to run yarn install
function runYarnInstall() {
    return new Promise((resolve, reject) => {
        exec(`yarn install`, (error, stdout, stderr) => {
            if (error) {
                console.warn(`Error running yarn install: ${error}`);
                reject(error);
            } else {
                console.log(`yarn install completed: ${stdout}`);
                resolve(stdout);
            }
        });
    });
}

// Main function to install all packages
async function installPackages() {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] Starting installation of packages`);

    for (let packageName of basePackages) {
        try {
            await yarnInstall(packageName);
        } catch (error) {
            console.error(`[${timestamp}] Failed to install ${packageName}`);
        }
    }

    // Run yarn install if any updates were successful
    if (updateSuccessful) {
        console.log(`Some packages were updated, running yarn install...`);
        try {
            await runYarnInstall();
        } catch (error) {
            console.error('Failed to complete yarn install');
        }
    }

    console.log(`[${timestamp}] All packages processed`);
}

// Start the installation process
installPackages();
