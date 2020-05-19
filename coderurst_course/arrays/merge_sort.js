function mergeSort(arr, start, end) {
  if (end - start === 1 || end - start === 0) {
    return;
  }
  let combined = [];
  let midIdx = Math.floor((end - start) / 2);
  mergeSort(arr, start, midIdx);
  console.log("FINISHED LEFT SIDE " + start);
  mergeSort(arr, midIdx + 1, end);
  console.log("FINISHED RIGHT SIDE");

  let p1 = start;
  let p2 = midIdx + 1;

  while (p1 < midIdx + 1 && p2 < end + 1) {
    if (arr[p1] < arr[p2]) {
      combined.push(arr[p1]);
      p1++;
    } else {
      combined.push(arr[p2]);
      p2++;
    }
  }
  while (p1 < midIdx + 1) {
    combined.push(arr[p1]);
    p1++;
  }
  while (p2 < end + 1) {
    combined.push(arr[p2]);
    p2++;
  }
  let j = 0;
  for (let i = start; i <= end; i++) {
    arr[i] = combined[j];
    j++;
  }
  return arr;
}

console.log(mergeSort([99, 10, 4, 2, 22, 1], 0, 5));
