// Closure function Example
/*
i should have a fn increment()
on call of the fn it should increment the number 
and return the current count
*/

let count = 0
 // let count1 = 3   // count is change everyOne, this time my code is bad  

function increment() {
  
    count ++
    return count  // return the current count of the counter
}
console.log(increment())
console.log(increment())
console.log(increment())
console.log(increment())
console.log(increment())
console.log(increment())

console.log('----------------------------------------------------------------')



//Example 02 (Closure)
// create counter 

function inc () {
   let count = 0

// Closure Function (Function binded by it's lexical scope)
    return function () {
        count ++
        return count
    }
}

const x = inc()
const y = inc()

console.log(x())
console.log(x())
console.log(y())
console.log(y())
console.log(x())
console.log(y())
console.log(x())
console.log(x())


//Example 03

/*function test () {
    let obj = {value : 10} // 10 mb
    return true
}

// 0 mb
test() // 10 mb
// -10 mb (Garbage Collector)
// 0 mb
*/

function test () {
    let obj = {value : 10} // 10 mb
    return function () { // line 67 to 70 is a closure function
        console.log(obj)
    }
}
const innerFn = test() // 10 mb
// 10 mb
// in this case Garbage Collector will not work  because we will return a function
// we use reference of object innerFn that why Garbage Collector will not erase object
console.log(innerFn)
console.log(innerFn)
console.log(innerFn)





