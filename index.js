// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generatemarkdown = require("./generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the name of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Describe your project in as much detail as you like.",
  },
  // {
  //   type: "input",
  //   name: "Table of Contents",
  //   message: "Describe your project in as much detail as you like.",
  // },
  {
    type: "input",
    name: "installation",
    message: "Provide installation instructions.",
  },
  {
    type: "input",
    name: "usage",
    message: "Explain the usage information.",
  },
  {
    type: "input",
    name: "contributing",
    message: "What are the contribution guidelines?",
  },
  {
    type: "input",
    name: "tests",
    message: "Provide test instructions.",
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license.",
    choices: ["MIT", "BSL", "Apache", "Unlicense"],
  },
  {
    type: "input",
    name: "GitHub",
    message: "Enter your GitHub user name",
  },
  {
    type: "input",
    name: "email",
    message: "enter your email address.",
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
    const mrkdwn = generatemarkdown(answers);
    fs.writeFile("README.md", mrkdwn, (err) =>
      err ? console.group(err) : console.log("README has been created!")
    );
  });
}

// Function call to initialize app
init();
