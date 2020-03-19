function binarySeach(arr, target, low = 0, high = arr.length - 1) {
  if (low > high) {
    return -1;
  }
  let mid = Math.floor((low + high) / 2);
  if (arr[mid] === target) {
    return mid;
  }

  if (arr[mid] < target) {
    low = mid + 1;
    return binarySeach(arr, target, low, high);
  }
  if (arr[mid] > target) {
    high = mid - 1;
    return binarySeach(arr, target, low, high);
  }
}

function double(x) {
  return add(x, x);
}

function add(x, y) {
  return x + y;
}

console.log(binarySeach([1, 2, 3, 4], 3));

// let left = recursion(1);
// let right = recursion(2);

// return left && right
