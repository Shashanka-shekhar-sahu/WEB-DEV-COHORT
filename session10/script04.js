// extends key word
// - The extends keyword in JavaScript is used for class inheritance, allowing one class to inherit properties and methods from another.
// example
// Parent class
class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log("Some generic animal sound");
  }
}

// Child class inheriting from Animal
class Dog extends Animal {
  makeSound() {
    console.log("Woof! Woof!");
  }
}

// Creating an instance of Dog
const myDog = new Dog("Buddy");
console.log(myDog.name); // Output: Buddy
myDog.makeSound(); // Output: Woof! Woof!
