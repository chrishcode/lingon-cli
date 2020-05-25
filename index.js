#!/usr/bin/env node

const inquirer = require('inquirer');
const shell = require('shelljs');

inquirer
  .prompt([
    {
      name: 'projectName',
      message: 'Project name:',
    },
  ])
  .then(answers => {
    console.info('Installing Lingon...');
    shell.exec('git clone https://github.com/chrishcode/lingon.git ' + answers.projectName);
    console.info('Lingon was successfully installed!');
  });

// console.log("Hello world!");