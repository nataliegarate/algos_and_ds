function mergeSort(arr) {
  if (arr.length === 1 || !arr.length) {
    return arr;
  }
  let combined = [];
  let midIdx = Math.floor(arr.length / 2);

  let left = mergeSort(arr.slice(0, midIdx));
  let right = mergeSort(arr.slice(midIdx, arr.length));

  let p1 = 0;
  let p2 = 0;

  while (p1 < left.length && p2 < right.length) {
    if (left[p1] < right[p2]) {
      combined.push(left[p1]);
      p1++;
    } else {
      combined.push(right[p2]);
      p2++;
    }
  }
  while (p1 < left.length) {
    combined.push(left[p1]);
    p1++;
  }

  while (p2 < right.length) {
    combined.push(right[p2]);
    p2++;
  }
  return combined;
}

console.log(mergeSort([99, 10, 4, 2, 22, 1]));
