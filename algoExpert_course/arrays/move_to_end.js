function moveElementToEnd(array, toMove) {
  let toMoveCount = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === toMove) {
      toMoveCount++;
    } else {
      array[i - toMoveCount] = array[i];
    }
  }
  for (let j = array.length - toMoveCount; j < array.length; j++) {
    array[j] = toMove;
  }
  return array;
}
