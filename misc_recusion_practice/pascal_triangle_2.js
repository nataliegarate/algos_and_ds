var getRow = function (rowIndex) {
  if (rowIndex === 0) {
    return [1];
  }
  if (rowIndex === 1) {
    return [1, 1];
  }
  let prevRow = getRow(rowIndex - 1);
  let newRow = [1];

  for (let i = 0; i < prevRow.length - 1; i++) {
    let newVal = prevRow[i] + prevRow[i + 1];
    newRow.push(newVal);
  }
  newRow.push(1);
  return newRow;
};
