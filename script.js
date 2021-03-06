const fs = require("fs");
const util = require("inquirer");
const inquirer = require("inquirer");

inquirer
    .prompt([
        {
            type: "input",
            name: "project",
            message: "What is your project's name?"

        },
        {
            type: "input",
            name: "description",
            message: "Please write a short description of your project"
        },
        {
            type: "list",
            name: "installation ",
            message: "What command should be run to install dependencies?",
            choices: [
                "npm i",
                "npm init -y"
            ]
        },
        {
            type: "input",
            name: "usage",
            message: "What does the user need to know about using the repo?"
        },
        {
            type: "list",
            name: "license",
            message: "What kind of license should your project have?",
            choices: [
                "MIT",
                "ISC",
                "GPL"
            ]
        },
        {
            type: "input",
            name: "contributing",
            message: "What does the user need to know about contributing to the repo?"
        },
        {
            type: "list",
            name: "test",
            message: "What command should be run to run tests?",
            choices: [
                "jest",
                "Chai",
                "Mocha"
            ]
        },
        {
            type: "input",
            name: "profilePicture",
            message: "Please enter the link to your GitHub profile picture"
        },
        {
            type: "input",
            name: "email",
            message: "What is your email address?"
        }
    ]).then(function(data){
        console.log(data);
    
        projectName = data.project;
        description = data.description;
        installation = data.installation ;
        usage = data.usage;
        license = data.license;
        contributing = data.contributing;
        test = data.test;
        profilePicture = data.profilePicture;
        email = data.email;

        console.log(projectName, description, installation, usage, license, contributing, test, 
            profilePicture, email);


var page = 
`# ${projectName}

## Description
- ${description} 

## Table of Contents
* [Installation](##Installation)
* [Usage](##Usage)
* [License](##License)
* [Contributing](##Contributing)
* [Tests](##Tests)
* [Questions](##Questions)


## Installation 
- ${installation }

## Usage
- ${usage}

## License
![GitHub license](https://img.shields.io/badge/License-${license}-blue.svg)

## Contributing 
- ${contributing}

## Tests
- ${test}

## Questions 
- ![GitHub profile picture](${profilePicture})
- ${email}
`;

fs.writeFile('Good_README.md', page, data, (err) => {
    if (err) throw err;
    console.log('hallelujah!!!');
})

});