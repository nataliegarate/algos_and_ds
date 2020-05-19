//given alien alphabet, find if strings provided are in alphabetical order


let alphabet = 'efghijkabcdlmnopqrstuvwxyz';
let alienStrings1 = ['efg', 'ef', 'xxx'];
let alienStrings2 = ['ef', 'efg', 'efgh']
let alienStrings3 = ['ez', 'ek', 'z']

function isAlphabetic(strings, alienAbc){
    let abcMap = {};
    for (let i = 0; i < alienAbc.length; i++){
        abcMap[alienAbc[i]] = i;
    }

    for (let i = 0; i < strings.length-1; i++){
        let current = strings[i];
        let next = strings[i+1];
        for (let j = 0; j < current.length; j++){
            if (abcMap[current[j]] > abcMap[next[j]]){
                return false;
            } else if (abcMap[current[j]] < abcMap[next[j]]){
                break;
            } else if ((j === current.length -1 || j === next.length-1) && current.length > next.length && current[j] === next[j]){
                return false;
            }
        }       
    }
    return true;
}

console.log('oNE CALL',isAlphabetic(alienStrings1, alphabet));
console.log('two call',isAlphabetic(alienStrings2, alphabet));
console.log('three call',isAlphabetic(alienStrings3, alphabet))