// TODO: Include packages needed for this application
const { type } = require("express/lib/response");
const fs=require("fs");
const inquirer=require("inquirer");
const { title } = require("process");
const generateMarkdown=require("./utils/generateMarkdown.js");
// TODO: Create an array of questions for user input
const questions = [{
    type:"input",
    message:"what is the title of your README",
    name:"title"
},
{
    type:"input",
    message:"what is the description that you want for your README",
    name:"description"
},
{
    type:"input",
    message:"what are your installation instructions for your app",
    name:"install"
},
{
    type:"input",
    message:"what is the usage info for your app",
    name:"useinfo"
},
{
    type:"input",
    message:"who contributed to making of this app",
    name:"contributers"
},
{
    type:"input",
    message:"what are the test instructions for your app",
    name:"test"
}

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err)=>
    err ? console.error(err) : console.log("sucess"));
}

// TODO: Create a function to initialize app
function init() {
inquirer
.prompt(

questions

)
.then((data)=>{
const markdwn= generateMarkdown(data);
writeToFile("README.md", markdwn);
})


}

// Function call to initialize app
init();

