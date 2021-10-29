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

${questions}

`;
}

module.exports = createMarkdown();