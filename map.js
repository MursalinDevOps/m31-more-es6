// arrayName.map() loops through the elements of an array and creates a new array containing the returned output from the callback function.

const numbers1 = [2, 4, 6, 8, 10];
const doubleIt = (n) => n * 2;
const result = numbers1.map(doubleIt);  //  [ 4, 8, 12, 16, 20 ] <== (Doubled by the Function)
console.log(result);

// Simplified Version !
const numbers2 = [4, 8, 12, 16, 20];
const output = numbers2.map((n)=> n*2); // Here (n) is is param and it returns n*2
console.log(output);
