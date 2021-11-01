// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === 'Apache 2.0') {
        return "## License " + "<br />" + "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    }
    if (license === 'MIT') {
        return "## License " + "<br />" + "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    }
    if (license === 'GPL V3') {
        return "## License " + "<br />" + "[![License: GPL V3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)"
    }
    if (license === 'MPL 2.0') {
        return "## License " + "<br />" + "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
    }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license !== "No license") {
        return "* https://opensource.org/licenses" + license
    }
    return "No License"
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license !== "No license") {
        return `
        This product is licensed under the ${license} product.`
    }
}
// [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
// [![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)
// [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
// [![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)

// adding a badge to the top of the readme (line 49)
function generateMarkdown({ title, description, installation, usage, contributing, tests, license, email, github }) {
    return `
## ${title}

## Description

${description}


${renderLicenseBadge(license)}

## Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Questions](#questions)

## Installation

${installation}

## Usage

${usage}

## Contributing

${contributing}

## Tests

${tests}

## Licenses

${renderLicenseLink(license)}
${renderLicenseSection(license)}

## Questions
Please check out my ${github} for more questions on the methodology and what have you.
I can also be addressed at ${email} for direct requests.
`;

}
// To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the syntax on line 76-78:
```md
![alt text](assets / images / screenshot.png)
    ```

// exporting the function
module.exports = generateMarkdown;

// now we have the readme printing, so we just want to render the license content
// it will be a series of if statements (done)

// TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
// return `# ${data.title}
// `;
// }
// module.exports = generateMarkdown;
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
