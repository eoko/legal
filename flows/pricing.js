const inquirer = require('inquirer');
const inspect = require('../utils/inspect');

const defaultValues = {
  hours_day: 7,
  highest_daily_rate: 460,
  lowest_daily_rate: 400,
  range_rate: 60,
};

const defaultQuestions = [
  {
    type: 'confirm',
    name: 'default',
    message: 'Do you want load default pricing?',
    default: true,
  },
];

const questions = [
  {name: 'hours_day', default: defaultValues.hours_day, type: 'input', message: 'How many hours in a day of work?'},
  {name: 'highest_daily_rate', default: defaultValues.highest_daily_rate, type: 'input', message: 'What is your highest price?'},
  {name: 'lowest_daily_rate', default: defaultValues.lowest_daily_rate, type: 'input', message: 'and your lowest price?'},
  {name: 'range_rate', default: defaultValues.range_rate, type: 'input', message: 'And your range rate?'},
];

module.exports = () =>
  inquirer
    .prompt(defaultQuestions)
    .then(res => res.default === true ? defaultValues : inquirer.prompt(questions))
    .then(res => console.log(inspect(res)));
