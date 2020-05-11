let testerArr = [1, 2, 3, 4];

let findKthPermutation = function (v, k, result) {
  let curNum = 0;
  let desired = k;
  let ogLength = v.length;
  function helper(arr) {
    if (arr.length === 1) {
      return arr;
    }
    let res = [];
    for (let i = 0; i < arr.length; i++) {
      let cur = [arr[i]];
      let rest = arr.slice(0, i).concat(arr.slice(i + 1, arr.length));
      let permsOfRest = helper(rest);
      for (let j = 0; j < permsOfRest.length; j++) {
        let combinded = cur.concat(permsOfRest[j]);
        res.push(combinded);
        // if (combinded.length === ogLength) {
        //   curNum++;
        //   if (curNum === k) {
        //     return combinded;
        //   }
        // }
      }
    }
    return res;
  }
  return helper(v);
};

console.log(findKthPermutation(testerArr, 3));
