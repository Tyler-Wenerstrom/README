// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const markDown = require("./generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "Title",
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
];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  // .then((answers) => {
  //   // const readme = generateREADME(answers);
  //   fs.writeFile("README.md", markDown, (err) =>
  //     err ? console.log(err) : console.log("README has been created!")
  //   );
  // });
}

// TODO: Create a function to initialize app
function init() {
  return inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    return markDown;
  });
}

// Function call to initialize app
init();
