// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) { }

// // TODO: Create a function to initialize app
// function init() { }

// // Function call to initialize app
// init();

const inquirer = require('inquirer');
const fs = require('fs');
const createMarkdown = require("./createMarkdown.js");

const readmeQuestions = [
    {
        type: 'input',
        name: 'title',
        message: "Give your readme a Title!",
    },
    {
        type: 'input',
        name: 'description',
        message: "Describe the project",
    },
    {
        type: 'input',
        name: 'installation',
        message: "Provide detailed instructions on how to prepare the content",
    },
    {
        type: 'input',
        name: 'usage',
        message: "Describe the intended usage of this application",
    },
    {
        type: 'input',
        name: 'license',
        message: "Put any licenses here.",
    },
    {
        type: 'input',
        name: 'contributing',
        message: "List those who have contributed to your project.",
    },
    {
        type: 'input',
        name: 'tests',
        message: "Provide test instructions",
    },
    // need to update this part
    {
        type: 'input',
        name: 'license',
        message: "Provide the license you used",
    },
    {
        type: 'input',
        name: 'github',
        message: "Provide the url for your github profile",
    },
    {
        type: 'input',
        name: 'email',
        message: "Provide your email address",
    }
]
console.log(readmeQuestions);

// we want a function to start the inquirer
function init() {
    inquirer
        .prompt(readmeQuestions)
        .then((data) => {
            console.log(data);
            writeToFile(data);
        })
}

// and a function to write the README file:
function writeToFile(data) {
    const testPg = createMarkdown(data);
    fs.writeFile('testreadme.md', testPg, (err) =>
        err ? console.log(err) : console.log('Readme successfully created!')
    );
}

// calling the init function
init();


