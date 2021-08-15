// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: `What is the project's name?`,
    validate: (answer) => {
      if (!answer) {
        return console.log("A name is required for your project!");
      }
      return true;
    },
  },
  {
    type: "input",
    name: "repoDesc",
    message: `Give a "what, why and how" desciption of this project.`,
    validate: (answer) => {
      if (!answer) {
        return console.log("A description is required for your project!");
      }
      return true;
    },
  },
  {
    type: "input",
    name: "installation",
    message: `What, if any, installation instructions are there?`,
  },
  {
    type: "input",
    name: "usage",
    message: `Give instructions and examples of your project in action.`,
    validate: (answer) => {
      if (!answer) {
        return console.log("Instructions are required for your project!");
      }
      return true;
    },
  },
  {
    type: "input",
    name: "credits",
    message: `List any collabarators, tutorials and sources used to make this project.`,
  },
  {
    type: "list",
    name: "license",
    choices: [
      "None",
      "MIT License",
      "Mozilla Public License 2.0",
      "GNU AGPLv3",
      "GNU GPLv3",
      "GNU LGPLv3",
    ],
    validate: (answer) => {
      if (answer.length > 1) {
        return console.log("Only one answer allowed!");
      }
      return true;
    },
  },

  {
    type: "input",
    name: "tests",
    message: `List any tests written for your project.`,
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  const data = inquirer.prompt(questions).then((response) => {
    console.log(response);
    const markdown = generateMarkdown(response);
    console.log(markdown);
  });
}

// Function call to initialize app

init();
