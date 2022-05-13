// TODO: Include packages needed for this application
const inquirer = require("inquirer")
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "Enter Project Title",
        name: "title"
    },
    {
        type: "input",
        message: "Enter Project description",
        name: "description"
    },
    {
        type: "input",
        message: "installation instruction",
        name: "instruction"
    },
    {
        type: "input",
        message: "Enter usage information",
        name: "usage"
    },
    {
        type: "input",
        message: "enter contribution guidelines",
        name: "contribution"

    
    },
    {
        type:"list",
        message:"Enter license",
        name:"license",
        choices:['MIT','ISC','GPL','APACHE2.0','None']
    },
    {
        type:"input",
        message:"Enter Github name",
        name:"github"
    },
    {
        type:"input",
        message:"Enter email",
        name:"email"
    },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
