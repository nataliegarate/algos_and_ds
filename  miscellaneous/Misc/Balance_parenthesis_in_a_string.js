/*

Question Description
You are given a string with alphanumeric characters and parentheses. 
Your goal is to return a string with balanced parentheses by removing the fewest characters possible. 
Note that you cannot add anything to the string.

Examples

"()"  -> "()"
"b(a)r)"  -> "b(a)r"
")("  -> ""
"(a(b(b(n((((ghjhvbj"  -> ""
")(())("  -> "(())"
 SCORE: 
Note that there can be multiple correct results per input. You just have to return one of the correct results.

"(()()("  -> "()()" OR "(())"
"(())())"  -> "(()())" OR "(())()"

*/

// use stack to identify when a parentheses does not exist
// when this is identified, remove item from that string or don't push it into the 'final' string

// function removeMinParenthesis(string) {
//   let stack = [];
//   let bad = new Set();
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] === "(") {
//       stack.push({ par: string[i], index: i });
//       bad.add(i);
//     } else if (!stack.length && string[i] === ")") {
//       bad.add(i);
//     } else if (
//       stack.length &&
//       stack[stack.length - 1].par === "(" &&
//       string[i] === ")"
//     ) {
//       bad.delete(stack[stack.length - 1].index);
//       stack.pop();
//     }
//   }
//   newString = "";
//   for (let i = 0; i < string.length; i++) {
//     if (!bad.has(i)) {
//       newString += string[i];
//     }
//   }
//   return newString;
// }

function removeMinParenthesis(string) {
  let arrStr = string.split("");
  let stack = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "(") {
      stack.push(i);
    } else if (!stack.length && string[i] === ")") {
      arrStr[i] = "#";
    } else if (string[i] === ")") {
      stack.pop();
    }
  }
  stack.forEach(index => (arrStr[index] = "#"));
  return arrStr.filter(word => word !== "#").join("");
}

console.log("()", removeMinParenthesis("()"));
console.log("b(a)r", removeMinParenthesis("b(a)r)"));
console.log("none", removeMinParenthesis(")("));
console.log("none", removeMinParenthesis("(a(b(b(n((((ghjhvbj"));
console.log("(())", removeMinParenthesis(")(())("));

/* My first struggle was remembering how to validate parenthesis; I got stuck on this for a while.
Then I remembered that I could use a stack and it slowly started coming back

Next, I struggled for a while thinking how to implement removing the least amount of strings

I came to think I would need to record 'bad indexes' then i could push everything in the string except the bad indexes

I struggled on this for a while, having trouble thinking 'where/how would i store these indexes'

Then I realized I could store them when I add to the stack, and reference the stored index on the stack
when I wanted to remove something that shouldn't eb in the 'bad' array (becasue we found a pair)
*/
