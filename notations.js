const user = {
    id: 1,
    name:'John',
    job:'Developer',
    age:20
}

console.log(user.job); // dot notation
console.log(user['age']); // bracket notation (must be a string)
const id = 'id';
console.log(user[id]); // bracket notation but using a variable inside the bracket (just the variable name, not a string)
