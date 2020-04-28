/*
[0, i) nums less than pivot
[i:j] unknown area
(j:) nums larger than pivot



[2] [2] [4] [6] [9] [8]

                     p
                 j
                     i

get array 0 to i

array i+1 to end

do same on each

if array.length = 1 {return array}


while (i <= j && j >= 0)
    if num[i] <= p
        i++
    
    elseif num[i] > pivot
        swap(i,j)
        j--



swap p with i  





*/

let quickSort = function (a, low = 0, high = a.length - 1) {
  if (high - low < 1) {
    return;
  }
  console.log(low, high);
  let i = low;
  let j = high - 1;
  let p = high;
  while (i <= j) {
    if (a[i] <= a[p]) {
      i++;
    } else if (a[i] > a[p]) {
      [a[i], a[j]] = [a[j], a[i]];
      j--;
    }
  }
  [a[p], a[i]] = [a[i], a[p]];
  if (a.length === 2) {
    return;
  }

  quickSort(a, low, i - 1);
  quickSort(a, i + 1, high);
  return a;
};

console.log(quickSort([38, 6, 21, 12, 19, 29, 22, 33, 14]));
/*
                                                        p
                       i       
                                          j

                       [1,1,2,9,10]
*/
