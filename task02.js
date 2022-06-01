/* We need to be sure that a randomly generated
number is divisible by 2. Write a Js code that 
generates a random number, using the 'random method'
of the in-built 'Math'  class to generate 5 random 
numbers, add them to an array and print out the
last of them which is divisible by 2*/

// Global Variables
const randomNumArr = [];
let lastNumDiv;

//Generating random numbers between 0 and 100
for (let i = 0; i < 5; i++) {
    randomNumArr.push(Math.floor((Math.random() * 100) + 1));
}
//console.log(randomNumArr);

//Finding last element in the array divisible by 2
for (let j = randomNumArr.length-1; j >= 0; j--) {
    if (randomNumArr[j]%2 === 0) {
        lastNumDiv = randomNumArr[j];
        break;
    }
}
console.log(randomNumArr, lastNumDiv);