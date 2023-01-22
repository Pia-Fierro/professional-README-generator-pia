const inquirer = require('inquirer');
const fs = require('fs');


const generateMarkdown = ({title, description, installation, usage, license, contribution, test, gitUser, mail}) =>

`
# ${title}

![badge](https://img.shields.io/badge/license-${license}-yellow)

## Description 
${description}

## table of content
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Test](#test)
- [Questions](#questions)
   
### Instalation
${installation}

### Usage
${usage}

### Contribution
${contribution}

### Test
${test}

### Questions
Please forward your questions or suggestions using either of the following channels: \n
    - My GitHub link is [${gitUser}](https://github.com/${gitUser})  

    -My email is ${mail}

`;

inquirer.prompt([
    {
        type:"input",
        name: "title",
        message: "Hello! what is the name of your project?",
    },
    {
       type:"input",
       name:"description",
       message:"Please, describe your project",
    },
    {
        type:"input",
        name:"installation",
        message:"What are the steps required for the installation of your project",
    },
    {
        type:"input",
        name:"usage",
        message:"Describe the usage of your project",
    },
    {
        type:"list",
        name:"license",
        message:"What is the license of your project?",
        choices: [
            "None",
            "ISC",
            "MIT"
            ]
    },
    {
        type:"input",
        name:"contribution",
        message:"Please write the contributions to the develop of your project",
    },
    {
       type:"input",
       name:"test",
       message:"Enter test" 
    },
    {
        type: "input",
        name: "gitUser",
        message: "What is your Github username?"
    },
    {
        type:"input",
        name:"mail",
        message:"What is your email address?",
    },
])

.then((answers)=>{
    const READMEfile = generateMarkdown(answers);
    fs.writeFile('README.md',READMEfile, (err)=>
    err? console.log(err) : console.log('Successfully created README.md :)!')    
    );
});




