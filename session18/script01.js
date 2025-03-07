// Lexical scoping & Closure
//* Lexical scoping is a convention used in many languages in which a variable's scope is determined by its position within the nested function scopes. In JavaScript, lexical scoping means that a variable defined outside a function can be accessible inside another function defined after the variable declaration. This is because JavaScript uses function scope, not block scope.

// * Lexical scop in javascript is a convention that detarmines how  veriable are accessible in a block scope


//* Closure = A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

//* in Javascript, A closure is a function that has access to the variables of its outer function, even after the outer function has finished executing.

//* A function returning a function with it's lexical scope binded is known as Closure function



//Example 01
const fName1 = "shashank"

function sayName1() {
    // fName is exist in this function
    console.log(fName1)
}
console.log(`In sayName`,fName1)
sayName1()



//Example 02
const fName2 = "shashank" //global scope

function sayName2() {
    let fName2 = "situl"  // 
    console.log(fName2) // yes
}
console.log(`In sayName`,fName2)
sayName2() // cannot Redeclare block-scoping variable 'fName2'