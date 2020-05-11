let findPythagoreanTriplets = function (arr) {
  let triplets = [];
  let squaredMap = {};
  arr = arr.sort((a, b) => a - b);
  addToMap(arr, squaredMap);
  console.log(squaredMap);
  for (let i = 0; i < arr.length - 2; i++) {
    let cur = arr[i];
    let p1 = i + 1;
    let p2 = arr.length - 1;
    while (p1 < p2) {
      let sum = squaredMap[cur] + squaredMap[arr[p1]];
      let desiredSum = squaredMap[arr[p2]];
      if (sum === desiredSum) {
        triplets.push([cur, arr[p1], arr[p2]]);
        p1++;
        p2--;
      } else if (sum < desiredSum) {
        p2--;
      } else {
        p1++;
      }
    }
  }
  return triplets;
};

function addToMap(arr, map) {
  for (let i = 0; i < arr.length; i++) {
    map[arr[i]] = Math.pow(arr[i], 2);
  }
}

let arr1 = [1, 2, 3, 4, 5];

console.log(findPythagoreanTriplets(arr1));
