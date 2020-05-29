function flattenDictionary(dict) {
  let returnDict = {};
  function helper(dict, parentName) {
    for (let key in dict) {
      if (typeof dict[key] === "string") {
        if (parentName && parentName.length > 0) {
          let newKey;
          key.length
            ? (newKey = parentName + "." + key)
            : (newKey = parentName);
          returnDict[newKey] = dict[key];
        } else {
          returnDict[key] = dict[key];
        }
      } else {
        if (parentName && parentName.length > 0) {
          let newKey = parentName + "." + key;
          helper(dict[key], newKey);
        } else {
          helper(dict[key], key);
        }
      }
    }
  }
  helper(dict, null);
  return returnDict;
}
