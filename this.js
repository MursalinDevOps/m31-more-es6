// class creates INSTANCE (object) using constructor ( construction's declaration method is similar as function)
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const person1 = new Person('Tyler', 25); // output : Person { name: 'Tyler', age: 25 }

// Output object's values can be accessed by "this." method
console.log(person1); // Instance ( ~~ similar TO object)