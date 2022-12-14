// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "") {
    return `![GitHub License](https://img.shields.io/badge/license-${license}-blue.svg)`;
  } else "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "") {
    return ``;
  } else "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ${renderLicenseBadge(data.license)}

  # ${data.title}

  ## Table of Contents
  -[Project description](#Description)
  -[Installation instructions](#Installation)
  -[Usage information](#Usage)
  -[Contribution guidelines](#Contributing)
  -[Test instructions](#Tests)
  -[License](#license)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}
  
  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions

  [${data.GitHub}](https://www.github.com/${data.GitHub})


  ${data.email}
  
  
`;
}

module.exports = generateMarkdown;
