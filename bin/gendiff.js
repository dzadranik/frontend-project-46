#!/usr/bin/env node

// import path from "path";
import fs from "fs";
import gendiff from "../src/gendiff.js";
import { program } from "commander";

const command = (path1, path2) => {
  const allowedFiles = ["json", "yml", "yaml"];
  let fileType = path1.split(".");
  fileType = fileType[fileType.length - 1];

  if (allowedFiles.includes(fileType)) {
    fileType = fileType === "yml" ? "yaml" : fileType;
    console.log(
      gendiff(fileType, fs.readFileSync(path1), fs.readFileSync(path2))
    );
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
