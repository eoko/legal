var inquirer = require('inquirer');
const general = require('./flows/general');

const contracts = {
  general: {},
  cga: {},
  cp: {},
  cpi: {},
  stories: {},
}

// needs
const kind = {
  development: {},
  hosting: {},
  support: {},
  tma: {},
  course: {},
}

const data = {
  'pricing': {
    'hours_day': 7,
    'daily_rate': 460,
    'fair_rate': 1.0015,
  },
  'client': {
    'description': 'La société X, Société par actions simplifiée au capital de  Y euros, dont le siège social est sis PAR LÀ, immatriculée sous le n° Z, représentée par A,',
  },
  'contract': {
    'duration': 50,
    'duration_unit': 'heures',
    'prepayment_novat': null,
    'prepayment_vat': null,
  },
  'cgv': {
    'start_date': '1er janvier 2013',
  },
  'cga': {
    'start_date': '1er janvier 2013',
  },
};


const questions = [
  {
    type: 'list',
    name: 'kind',
    message: 'Which kind of contract do you want?',
    choices: Object.keys(kind),
  },
];


general()
  .then((answers) => {

    console.log(answers);
    // Use user feedback for... whatever!!
  })
  .catch(console.log);

