const myName = "Alice";
const myAge = 42;
const sum = (a: number, b: number) => {
  return a + b;
};
sum(1, 2);

class Person {
  // constructor method (method = function inside a class)
  constructor(
    private age: number,
    private name: string,
  ) {
    this.age = age;
    this.name = name;
  }

  getSummary() {
    return `My name is ${this.name} and I am ${this.age} years old`;
  }
}

const alice = new Person(42, 'Alice');
alice.getSummary(); // "My name is Alice and I am 42 years old"
