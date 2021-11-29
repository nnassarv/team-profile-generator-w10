// add all necessary modules
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

// define the location where the generated html will be stored
const pathToFile = "./dist/index.html";

// define the location of the file to be used as template for the team profile
const htmlTemplate = require("./src/htmlTemplate");

// add the classes for each employee type
const employee = require("./lib/employee");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");
const manager = require("./lib/manager");

// async function
const writeFileAsync = util.promisify(fs.writeFile);


// start function to define questions about the team members
function questions () {
    return inquirer.prompt ([
        {
            type: 'input',
             name: 'managerName',
             message: 'What is the name of the team manager?',
         },
         {
             type: 'input',
             name: 'managerId',
             message: 'What is the employee ID number of the manager?'
         },
         {
             type: 'input',
             name: 'managerEmail',
             message: 'What is the email address of the manager?'
         },
         {
             type: 'input',
             name: 'managerNumber',
             message: 'What is the phone number of the manager?'
         },
         {
             type: 'input',
              name: 'engineerName',
              message: 'What is the name of the engineer?',
          },
          {
              type: 'input',
              name: 'engineerId',
              message: 'What is the employee ID number of the engineer?'
          },
          {
              type: 'input',
              name: 'engineerEmail',
              message: 'What is the email address of the engineer?'
          },
          {
              type: 'input',
              name: 'engineerGitHub',
              message: 'What is the GitHub username of the engineer?'
          },
          {
             type: 'input',
              name: 'internName',
              message: 'What is the name of the intern?',
          },
          {
              type: 'input',
              name: 'internId',
              message: 'What is the employee ID number of the intern?'
          },
          {
              type: 'input',
              name: 'internEmail',
              message: 'What is the email address of the intern?'
          },
          {
              type: 'input',
              name: 'internSchool',
              message: 'What school does the intern attend?'
          },
    ]);
}

async function init() {
    try {
        // questions about the team
        const answers = await questions();
        // responses/answers
        const generateTeamProfileHtml = htmlTemplate(answers);

        // create a team profile with the answers provided
        await writeFileAsync(pathToFile, generateTeamProfileHtml);
        console.log("Team Profile created successfully!");
    }

    // log any error
    catch(err) {
        console.log(err);
    }
}

init();