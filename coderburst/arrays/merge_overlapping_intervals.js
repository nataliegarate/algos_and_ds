/* Merge an Array With Overlapping Intervals

[ Pair { first: 1, second: 5 },
  Pair { first: 3, second: 7 },
  Pair { first: 4, second: 6 },
  Pair { first: 6, second: 8 },
  Pair { first: 10, second: 12 },
  Pair { first: 11, second: 15 } ]

                1   5

                  both in range 1 5
                  one out of range on left -5 5
                  one out of range on right 1 13                       
  loop through array

  let curMin = first   1
  let curMax = second 5

    if (first >= curMin && second <= curMax) {
        continue;
    } else if (first < curMin && second <= curMax) {
        curMin = first;
    } else if (second > curMax && first >= curMin) {
        curMax = second;
    } else {
        result.push(curMin, curMax);
        curMin = first;
        curMax = second;
    }

 */

let mergeIntervals = function (v) {
  let result = [];
  let curMin = v[0].first;
  let curMax = v[0].second;
  for (let i = 0; i < v.length; i++) {
    if (v[i].first >= curMin && v[i].second <= curMax) {
      continue;
    } else if (
      v[i].first < curMin &&
      v[i].second <= curMax &&
      v[i].second >= curMin
    ) {
      curMin = v[i].first;
    } else if (
      v[i].second > curMax &&
      v[i].first <= curMax &&
      v[i].second >= curMin
    ) {
      curMax = v[i].second;
    } else {
      result.push([curMin, curMax]);
      curMin = v[i].first;
      curMax = v[i].second;
    }
  }

  result.push([curMin, curMax]);
  return result;
};

let arr = [
  { first: 1, second: 5 },
  { first: 3, second: 7 },
  { first: 4, second: 6 },
  { first: 6, second: 8 },
  { first: 10, second: 12 },
  { first: 11, second: 15 },
];

console.log(mergeIntervals(arr));
