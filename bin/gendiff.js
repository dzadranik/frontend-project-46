#!/usr/bin/env node

// import path from "path";
import fs from "fs";
import jsonParser from "../src/parsers/json-parser.js";
import yamlParser from "../src/parsers/yaml-parser.js";
import { program } from "commander";

const command = (path1, path2) => {
  const fileParsers = {
    json: jsonParser,
    yml: yamlParser,
    yaml: yamlParser,
  };
  let fileType = path1.slice(path1.lastIndexOf('.') + 1);

  if (fileParsers[fileType]) {
    const conf1 = fs.readFileSync(path1);
    const conf2 = fs.readFileSync(path2);

    console.log(fileParsers[fileType](conf1, conf2));
  } else {
    console.log("Error file type");
  }
};

program
  .version("0.0.1")
  .description("Compares two configuration files and shows a difference.")
  .arguments("<filepath1> <filepath2>")
  .option("-f, --format [type]", "output format")
  .action(command)
  .parse(process.argv);
