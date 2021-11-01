// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) { }

// // TODO: Create a function to initialize app
// function init() { }



const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./createMarkdown.js");

const readmeQuestions = [
    {
        type: 'input',
        name: 'title',
        message: "Enter the title of your project.",
    },
    {
        type: 'input',
        name: 'description',
        message: "Describe the project.",
    },
    {
        type: 'input',
        name: 'installation',
        message: "Provide detailed instructions on how to install the content.",
    },
    {
        type: 'input',
        name: 'usage',
        message: "Describe the intended usage of this application.",
    },
    {
        type: 'input',
        name: 'contributing',
        message: "List those who have contributed to your project.",
    },
    {
        type: 'input',
        name: 'license',
        message: "Provide any licenses (i.e., MPL 2.0, GPL V3, etc.) here",
    },
    {
        type: 'input',
        name: 'tests',
        message: "Provide detailed instructions to allow the user to test the application.",
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
    },
    {
        type: 'input',
        name: 'features',
        message: "Add any special features your project has here",
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
    const testPg = generateMarkdown(data);
    fs.writeFile('testreadme.md', testPg, (err) =>
        err ? console.log(err) : console.log('Readme successfully created!')
    );
}


// Initializing the app
init();


