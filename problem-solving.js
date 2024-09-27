// TASK-1 : Make Even numbers using for loop and .map method

let oddNumbers = [1, 3, 5, 7, 9];
let evenNumbers = [];

for (let num of oddNumbers) {
  if (num % 2 === 1) {
    evenNumbers.push(num + 1);
  }
}
console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]

const numbers = [...oddNumbers];
const evenIt = numbers.map((n) => {
  if (n % 2 === 1) {
    return n + 1;
  }
});
console.log(evenIt);

// TASK-2 : Get all the values that are divisible by 10 (using array.filter method)

// array.filter method
const arr = [33, 50, 79, 78, 90, 101, 30];
const divisibleByTen = arr.filter((n) => n % 10 === 0);
console.log(divisibleByTen); // [50, 90, 30]
// array.find method
const divisibleByTen2 = arr.find((n) => n % 10 === 0);
console.log(divisibleByTen2); // [50]

// TASK-3 : display the instructor names that has the position senior!

const instructors = [
    {name:'Emma', age:28, position:'Senior'},
    {name:'Tyler', age:26, position:'Junior'},
    {name:'Chris', age:30, position:'Senior'}
]

for(const instructor of instructors){
    if(instructor.position.toLowerCase() === 'senior'.toLowerCase()){
        console.log(instructor.name);
    }
}