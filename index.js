// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [];
inquirer
  .prompt([
    {
      type: "input",
      name: "project name",
      message: "What is the name of your project?",
    },
    {
      type: "input",
      name: "Description",
      message: "Describe your project in as much detail as you like.",
    },
    {
      type: "input",
      name: "Table of Contents",
      message: "Describe your project in as much detail as you like.",
    },
    {
      type: "input",
      name: "Installation",
      message: "Provide installation instructions.",
    },
    {
      type: "input",
      name: "Usage",
      message: "Explain the usage information.",
    },
    {
      type: "input",
      name: "Contributing",
      message: "What are the contribution guidelines?",
    },
    {
      type: "input",
      name: "Tests",
      message: "Provide test instructions.",
    },
  ])
  // TODO: Create a function to write README file
  .then((answers) => {
    const readme = generateREADME(answers);

    fs.writeFile("README.md", readme, (err) =>
      err ? console.log(err) : console.log("README has been created!")
    );
  });
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
