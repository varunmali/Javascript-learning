/* 
1. Write a 'while' loop that calculates the sum of all numbers from 1 to 5 and stores the result in a variable named 'sum'.
*/

let sum = 0;
let i = 0;

while (i <= 5) {
  sum = sum + i;
  i++;
}

// console.log(sum);

/*
2. Write a 'while' loop that counts down from 5 to 1 and stores the number in array named 'countdown'.

*/

let countdown = [];
let j = 5;

while (j > 0) {
  countdown.push(j);
  j--;
}
console.log(countdown);
