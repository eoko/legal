const inquirer = require('inquirer');
const inspect = require('../utils/inspect');

const defaultValues = {
  company_name: 'EOKO',
  legal_structure: 'SAS',
  capital: '9.000€',
  rcs_city: 'LYON',
  rcs_number: 'XXX XXX XXX XXX',
  address_1: '32 rue de la Thibaudière',
  address_2: '69007 Lyon',
  address_3: null,
  holder_name: 'Muriel VANDEN HEEDE',
  holder_role: 'Présidente',
  author: 'Romain DARY',
  url: 'https://eoko.fr',
  url_nice: 'eoko.fr',
};

const defaultQuestions = [
  {
    type: 'confirm',
    name: 'default',
    message: 'Do you want load default company info?',
    default: true,
  },
];

const questions = [
  {name: 'company_name', default: defaultValues.company_name, type: 'input', message: 'What is your comapny name?'},
  {name: 'legal_structure', default: defaultValues.legal_structure, type: 'input', message: 'and legale structure?'},
  {name: 'capital', default: defaultValues.capital, type: 'input', message: 'and your company capital?'},
  {name: 'rcs_city', default: defaultValues.rcs_city, type: 'input', message: 'What is your RCS city?'},
  {name: 'rcs_number', default: defaultValues.rcs_number, type: 'input', message: 'And your RCS number associate to your company'},
  {name: 'address_1', default: defaultValues.address_1, type: 'input', message: 'What is your company address (line 1)?'},
  {name: 'address_2', default: defaultValues.address_2, type: 'input', message: 'address line 2 (if necessary)?'},
  {name: 'address_3', default: defaultValues.address_3, type: 'input', message: 'address line 3 (if necessary)?'},
  {name: 'holder_name', default: defaultValues.holder_name, type: 'input', message: 'What is you company holder name?'},
  {name: 'holder_role', default: defaultValues.holder_role, type: 'input', message: 'And he\'s role?'},
  {name: 'author', default: defaultValues.author, type: 'input', message: 'What is the author of your legal document?'},
  {name: 'url', default: defaultValues.url, type: 'input', message: 'What is your full company website url?'},
  {name: 'url_nice', default: defaultValues.url_nice, type: 'input', message: 'And the nice version?'},
];

module.exports = () =>
  inquirer
    .prompt(defaultQuestions)
    .then(res => res.default === true ? defaultValues : inquirer.prompt(questions))
    .then(res => console.log(inspect(res)));
