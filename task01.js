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