function smallestDifference(arrayOne, arrayTwo) {
    arrayOne = arrayOne.sort((a, b) => (a - b));
    arrayTwo = arrayTwo.sort((a, b) => (a - b));
    let idx1 = 0;
    let idx2 = 0;
    let closest = Infinity;
    let possibleNums = [];
    while (idx1 < arrayOne.length && idx2 < arrayTwo.length) {
        if (arrayOne[idx1] - arrayTwo[idx2] === 0) {
            return [arrayOne[idx1], arrayTwo[idx2]];
        }
        if (Math.abs(arrayOne[idx1] - arrayTwo[idx2]) < closest) {
            closest = Math.abs(arrayOne[idx1] - arrayTwo[idx2]);
            possibleNums = [arrayOne[idx1], arrayTwo[idx2]];
        }
        if (arrayOne[idx1] < arrayTwo[idx2]) {
            idx1++;
            continue;
        }
        if (arrayOne[idx1] > arrayTwo[idx2]) {
            idx2++;
        }

    }
    return possibleNums;
