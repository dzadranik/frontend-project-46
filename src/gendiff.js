const gendiff = (conf1, conf2) => {
  const config1 = JSON.parse(conf1);
  const config2 = JSON.parse(conf2);

  const keys1 = Object.keys(config1).sort();
  const keys2 = Object.keys(config2).sort();
  const diff = ["{"];
  for (const key of keys1) {
    if (keys2.includes(key)) {
      if (config1[key] === config2[key]) {
        diff.push(`    ${key}: ${config1[key]}`);
      } else {
        diff.push(`  - ${key}: ${config1[key]}`);
        diff.push(`  + ${key}: ${config2[key]}`);
      }
    } else {
      diff.push(`  - ${key}: ${config1[key]}`);
    }
  }
  keys2
    .filter(key => !keys1.includes(key))
    .forEach(key => {
      diff.push(`  + ${key}: ${config2[key]}`);
    });
  diff.push("}");

  return diff.join("\n");
};

export default gendiff;
