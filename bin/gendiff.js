#!/usr/bin/env node

// import path from "path";
import fs from "fs";
import gendiff from "../src/gendiff.js";
import { program } from "commander";

const command = (path1, path2) => {
  console.log(gendiff(fs.readFileSync(path1), fs.readFileSync(path2)));
};

program
  .version("0.0.1")
  .description("Compares two configuration files and shows a difference.")
  .arguments("<filepath1> <filepath2>")
  .option("-f, --format [type]", "output format")
  .action(command)
  .parse(process.argv);
