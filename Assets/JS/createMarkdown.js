// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

`;
}

module.exports = generateMarkdown;

// what do we want to do here?

// we want to create a function that will print out the markup from the inputs in the index.js file
// to do this, we need to be able to take the inputs, and display them through the use of this and global objects 
// so we can use template literals, most likely, to create the page as we would like to see it

// function (all the things we asked for)

// return with a template literal, the title

// description


// all the content, exactly how we've typed it out

// we call out the content with []and (#) (for table of contents)
// and ${}

// need to add license, email and github
function createMarkdown({ title, description, installation, usage, contributing, tests }) {
    return `
## ${title}

## Description

${description}

## Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Questions](#questions)

## Installation Instructions

${installation}

## Usage

${usage}

## Contributing

${contributing}

## Tests

${tests}

## Questions


`;
}

// exporting the function
module.exports = createMarkdown;

// now we have the readme printing, so we just want to render the license content
// it will be a series of if statements

