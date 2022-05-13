// TODO: Include packages needed for this application
const fs = require("fs");
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
        message: "Enter testing instructions",
        name: "test"
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
function init() { 
    inquirer.prompt(questions).then(response => {
        console.log(response)
        let markdownContent = `
        
# Title: ${response.title}

## Table Of Contents
* [Description](#description)

* [instruction](#instruction)

* [usage](#usage)

* [contribution](#contribution)

* [email](#email)

* [license](#license)

* [github](#github)

* [testing](#test)

### Description
${response.description}

### Instruction
${response.instruction}

#### Usage
${response.usage}

###Testing
${response.test}

### Github
[Github Profile](https://github.com/${response.github})

### License
 ![GitHub license](https://img.shields.io/badge/license-${response.license}-blue.svg)


 ### Email
 feel free to contact me if you have any questions ${response.email}
        `
fs.writeFileSync("README.md",markdownContent, function(err){
    if(err)throw err;
})
        
console.log("README generated")
    })
}

// Function call to initialize app
init();
