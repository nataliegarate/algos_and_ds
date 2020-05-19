let findAllSubsets = function (v, sets) {
  function helper(arr, temp, idx) {
    if (idx === arr.length) {
      sets.push(temp.slice());
      return;
    }
    temp.push(arr[idx]);
    helper(arr, temp, idx + 1);
    temp.pop();
    helper(arr, temp, idx + 1);
  }
  helper(v, [], 0);
  return sets;
};
