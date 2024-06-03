#!/usr/bin/env node

const { execSync } = require("child_process");

function runCommand(command) {
    try {
        execSync(`${command}`, { stdio: "inherit" });
    } catch (err) {
        console.error(`Failed to execute ${command}`, err);
        return false;
    }
    return true;
}

let repoName = process.argv[2];

if (!repoName) repoName = "discord-js-bot-starter"

const gitCheckoutCommand = `git clone --depth 1 https://github.com/hewkawar/discord-js-bot-starter.git ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm install`;

console.log(`Cloning the repository with name ${repoName}`);
const checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut) process.exit(-1);

console.log(`Installing dependencies for ${repoName}`);
const installedDeps = runCommand(installDepsCommand);
if (!installedDeps) process.exit(-1);

console.log("\nCongratulations! You are ready. Follow the following commands to start\n");
console.log(`cd ${repoName}`);
console.log(`npm run dev`);