// index.js

const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Describe your project.",
    },
    {
        type: "input",
        name: "installation",
        message: "Installation",
    },
    {
        type: "input",
        name: "usage",
        message: "Usage",
    },
    {
        type: "input",
        name: "license",
        message: "License",
    },
    {
        type: "input",
        name: "contributing",
        message: "Contributing",
    },
    {
        type: "input",
        name: "tests",
        message: "Tests",
    },
    {
        type: "input",
        name: "questions",
        message: "Questions",
    },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            console.log(data);
            writeToFile("README.md", generateMarkdown(data));
        })
        .catch((err) => {
            console.log(err);
        });
}

// function call to initialize program
init();
