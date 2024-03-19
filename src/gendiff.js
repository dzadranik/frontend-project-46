import _ from "lodash";

const getDiff = (obj1, obj2, res, prefix) => {
  const keys = Array.from(new Set(Object.keys(obj1), Object.keys(obj2))).sort();
  for (const key of keys) {
    if (_.isPlainObject(obj1[key]) && _.isPlainObject(obj2[key])) {
      res.push(`${prefix}  ${key}: {`);
      res = getDiff(obj1[key], obj2[key], res, `    ${prefix}`);
      res.push(`${prefix}  }`);
    } else if (obj1[key] && obj2[key]) {
      if (obj1[key] === obj2[key]) {
        res.push(`${prefix}  ${key}: ${obj1[key]}`);
      } else {
        res.push(`${prefix}- ${key}: ${obj1[key]}`);
        res.push(`${prefix}+ ${key}: ${obj2[key]}`);
      }
    } else if (obj1[key]) {
      res.push(`${prefix}- ${key}: ${obj1[key]}`);
    } else {
      res.push(`${prefix}+ ${key}: ${obj1[key]}`);
    }
  }
  // res.push("}");
  return res;
};

const gendiff = ({ conf1, conf2 }) => {
  const diff = getDiff(conf1, conf2, ["{"], "  ");
  diff.push("}");

  return diff.join("\n");
};

export default gendiff;
