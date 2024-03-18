#!/usr/bin/env node
// file: gendiff.js
import { program } from 'commander';

const command = () => {
  console.log('Hello, World!');
};

program
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format')
  .action(command)
  .parse(process.argv);
