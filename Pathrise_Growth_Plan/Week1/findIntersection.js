function findIntersectionLinear(arr1, arr2) {
  let p1 = 0;
  let p2 = 0;
  let coordinates = [];
  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] === arr2[p2]) {
      coordinates.push(arr1[p1]);
      p1++;
      p2++;
    } else if (arr1[p1] < arr2[p2]) {
      p1++;
    } else if (arr1[p1] > arr2[p2]) {
      p2++;
    }
  }
  return coordinates;
}

// console.log(findIntersectionLinear([1, 3, 6, 17, 21], [2, 4, 6, 21]));
// console.log(findIntersectionLinear([0, 1, 3, 3, 3, 4], [2, 3, 3, 5]));

//not sure what they mean by intersection

function findIntersectionBinarySearch(arr1, arr2) {
  let shorter;
  let longer;
  if (arr1.length < arr2.length) {
    shorter = arr1;
    longer = arr2;
  } else {
    shorter = arr2;
    longer = arr1;
  }
  let coordinates = [];
  for (let i = 0; i < shorter.length; i++) {
    let result = binarySeach(longer, shorter[i], i);
    result ? coordinates.push(shorter[i]) : null;
  }
  return coordinates;
}

function binarySeach(arr, target, low) {
  let high = arr.length - 1;
  while (low + 1 < high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
      return true;
    } else if (arr[mid] < target) {
      low = mid;
    } else {
      high = mid;
    }
  }
  if (arr[low] === target || arr[high] === target) {
    return true;
  } else {
    return false;
  }
}

console.log(findIntersectionBinarySearch([1, 3, 6, 17, 21], [2, 4, 6, 21]));
console.log(findIntersectionBinarySearch([0, 1, 3, 3, 3, 4], [2, 3, 3, 5]));
