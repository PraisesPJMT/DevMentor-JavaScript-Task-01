/* We want to find the sum of all number between 
zero (0) and one hundred and one (101) - That is,
1 + 2 + 3 + ..... + 98 + 99 + 100. Use your skill
with Javascript to find a suitable solution to 
this challenge*/

const lowerThreshold = 0;
const upperThreshold = 6;
let sum = 0;

for (let i = lowerThreshold+1; i < upperThreshold; i ++) {
    sum += i;
    // console.log(sum);
}

console.log(sum);

// //Using Function

// function sum(lowerThreshold, upperThreshold) {
//     let sum = 0;

//     for (let i = lowerThreshold+1; i < upperThreshold; i ++) {
//     sum += i;
//     console.log(sum);
//     }
//     return sum;
// }

// let result = sum(0, 101);
// console.log(result);