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
    if(n%2===1){
        return n+1;
    }
})
console.log(evenIt);

