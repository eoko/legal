const inquirer = require('inquirer');

const questions = [

];

module.exports = inquirer
    .prompt(questions)
    .then( (answers) => {

    console.log(answers);
// Use user feedback for... whatever!!
});