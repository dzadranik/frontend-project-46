import gendiff from "../gendiff.js";

const parse = (conf1, conf2) => {
  const data = {};
  try {
    data.conf1 = JSON.parse(conf1);
    data.conf2 = JSON.parse(conf2);
    return gendiff(data);
  } catch (error) {
    throw "Error";
  }
};

export default parse;
