// function
// Commonly 3 types of function used in javascript (1. Named function, 2. Anonymous functions, 3. Arrow function)
// 1. named function
// example
// - A function with a specified name.
function greet() {
  console.log("hello world!");
}
greet();

//2. Anonymous functions
// - A function without a name, often assigned to a variable.
// example
const sayHii = function () {
  console.log("Hii!!");
};
sayHii();

//3. Arrow function
// - An arrow function in JavaScript is a concise way of writing functions using the => symbol. It is a shorter and more readable alternative to traditional function expressions.
// example
const add = (a, b) => a + b;
console.log(add(1, 2));











// Function declaration
function add (a, b){
  return a+b
}


//Function expression
const substract = function(c, d){
  return c-d
}


//Arrow function
const multiply = (e, f) => e*f



// First class function
function applyOperation (a, b, operation){
  return operation (a, b)
}

const result = applyOperation(5, 4, (x,y) => x/y)








//03 Tiffin concept
function createCounter(){
  let count = 0
  return function(){
      count ++
      return count
  }
}
console.log()
const counter = createCounter()
console.log(counter())




//05
// Immidiately invoked function
// this type of function we use for (when we open my website automatically connect to the data base)

(function(){
  console.log("Hii!")
})
()




