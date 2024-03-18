import fs from "fs";
// import path from "path";

const gendiff = (path1, path2) => {
  // console.log(path.resolve(path1) );
  const config1 = JSON.parse(fs.readFileSync(path1));
  console.log(config1);
  const config2 = JSON.parse(fs.readFileSync(path2));
  console.log(config2);
};

export default gendiff;
