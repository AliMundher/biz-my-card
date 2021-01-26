#!/usr/bin/env node


const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");

clear();

const prompt = inquirer.createPromptModule();



// Data for the card
const data = {
    name: chalk.bold.green("        Ali Mundher"),
    work: `${chalk.white("Developer Frond-End")} `,
    twitter: chalk.gray("https://twitter.com/") + chalk.cyan("@MundherAli2"),
    github: chalk.gray("https://github.com/") + chalk.green("AliMundher"),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("mundher-ali"),
    npx: chalk.red("npx") + " " + chalk.white("AliMundher"),

    labelWork: chalk.white.bold("       Work:"),
    labelTwitter: chalk.white.bold("    Twitter:"),
    labelGitHub: chalk.white.bold("     GitHub:"),
    labelLinkedIn: chalk.white.bold("   LinkedIn:"),
    labelCard: chalk.white.bold("       Card:")
};

// Build the card
const me = boxen(

    [
        `${data.name}`,
        ``,
        `${data.labelWork}  ${data.work}`,
        `${data.labelTwitter}  ${data.twitter}`,
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelLinkedIn}  ${data.linkedin}`,
        ``,
        `${data.labelCard}  ${data.npx}`,
        ``,
    ].join("\n"),
    {
        margin: 1,
        float: 'center',
        padding: 1,
        borderStyle: "double",
        borderColor: "green"
    }

);

// Print the card
console.log(me);

