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
    // {
    //     type: 'input',
    //     name: 'email',
    //     message: "Provide your email address",
    // },
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

// then we want a function to write the README:
function writeToFile(data) {
    const readmePg = createMarkdown(data);
    fs.writeFile('testreadme.md', readmePg, (err) =>
        err ? console.log(err) : console.log('Readme successfully created!')
    );
}

// calling the init function
init();


