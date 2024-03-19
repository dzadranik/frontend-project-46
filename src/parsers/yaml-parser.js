import gendiff from "../gendiff.js";
import yaml from "js-yaml";

const parse = (conf1, conf2) => {
  const data = {};
  try {
    data.conf1 = yaml.load(conf1);
    data.conf2 = yaml.load(conf2);
    return gendiff(data);
  } catch (error) {
    throw "Error";
  }
};

export default parse;
