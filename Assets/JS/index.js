const inquirer = require('inquirer');
const fs = require('fs');
// const createMarkdown = require("Assets/JS/createMarkdown.js");

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
        message: "Give your readme a Title!",
    },
    {
        type: 'input',
        name: 'license',
        message: "Give your readme a Title!",
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
        name: 'questions',
        message: "Give your readme a Title!",
    },
]
console.log(readmeQuestions);