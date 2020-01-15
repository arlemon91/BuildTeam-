const inquirer = require('inquirer');

// const files = require('./files');

module.exports = {
  askToBuildTeam: () => {
    const questions = [
      {
        name: 'username',
        type: 'checkbox',
        message: 'Build your team!',
        choices: [ 'Engineer', 'Manager', 'Employee', 'Intern']
      },

    {
        name: 'idnumber',
        type: 'input',
        message: 'ID:',
        validate: function(value) {
          if (value.length) {
            return true;
          } else {
            return 'Please enter ID.';
          }
        }
      },

      {
          name: 'email',
          type: 'input',
          message: 'Email: ',
          validate: value => {
              if(value.length) {
                  return true; 
              } else {
                  return 'Please enter valid email.';
              }
            }
    },

      {
          name: 'GitHub',
          type: 'input',
          message: 'Github: ',
          validate: value => {
              if (value.length) {
                  return true;
              } else {
                  return 'Please enter Github';
              }
          }
      }
    ];

     inquirer
     .prompt(questions)
     .then(function (answers) {
         console.log(answers);
     });
  },
};