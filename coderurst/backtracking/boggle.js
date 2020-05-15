// Given an NxN grid of characters and a dictionary, find all words which can be made from the characters in the grid, which are present in the given dictionary.
// A word can start and end at any character in the grid.The next character must be adjacent to the previous character in any of the directions: up, down, left, right and diagonal.

let grid = [
  ["c", "a", "t"],
  ["r", "r", "e"],
  ["t", "o", "n"],
];
let dictionary = [
  "cat",
  "cater",
  "cartoon",
  "toon",
  "moon",
  "not",
  "tone",
  "apple",
  "ton",
  "art",
  "aten",
  "cac",
];

class Boggle {
  constructor(grid, dictionary) {
    this.grid = grid;
    this.dictionary = dictionary;
    this.state = [];
  }

  findAllWords() {
    let words = new Set([]);
    for (let k = 0; k < this.dictionary.length; k++) {
      this.searchWord(dictionary[k], words);
    }
    return words;
  }

  searchWord(word, words) {
    for (let i = 0; i < this.grid.length; i++) {
      for (let j = 0; j < this.grid[i].length; j++) {
        if (this.grid[i][j] === word[0]) {
          this.searchPossibleMatch(i, j, word, words);
        }
      }
    }
  }

  searchPossibleMatch(i, j, target, words) {
    let stack = [{ val: this.grid[i][j], i: i, j: j, targIdx: 0 }];
    this.state = [];
    while (stack.length) {
      let cur = stack.pop();
      let targIdx = cur.targIdx + 1;
      this.state.push(cur.val);
      if (this.state.length === target.length) {
        words.add(target);

        break;
      }
      let prevStackLength = stack.length;
      //check left
      this.checkVal(cur.i - 1, cur.j, target, targIdx, stack);
      //check right
      this.checkVal(cur.i + 1, cur.j, target, targIdx, stack);
      //check below
      this.checkVal(cur.i, cur.j - 1, target, targIdx, stack);
      //check above
      this.checkVal(cur.i, cur.j + 1, target, targIdx, stack);
      //diagnal up left
      this.checkVal(cur.i - 1, cur.j + 1, target, targIdx, stack);
      //diagonal up right
      this.checkVal(cur.i + 1, cur.j + 1, target, targIdx, stack);
      //diagnal down left
      this.checkVal(cur.i - 1, cur.j - 1, target, targIdx, stack);
      // diagnal down right
      this.checkVal(cur.i - 1, cur.j + 1, target, targIdx, stack);
      if (prevStackLength === stack.length) {
        this.state.pop();
      }
    }
  }
  checkVal(i, j, target, targIdx, stack) {
    if (target[targIdx] === undefined) {
      return;
    }
    if (this.grid[i] && this.grid[i][j] === target[targIdx]) {
      stack.push({ val: this.grid[i][j], i: i, j: j, targIdx: targIdx });
    }
  }
}

let test = new Boggle(grid, dictionary);

console.log(test.findAllWords());
