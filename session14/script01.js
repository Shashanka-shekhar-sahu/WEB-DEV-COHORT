// Inside of JavaScript

// console.log('Hello world')

const a = 1
const b = 2

// console.log('SUM', a + b)
// console.log('BYE BYE')


// setTimeOut() (to delay the execution (deal with milliseconds))
//example 01
// setTimeout(()=> console.log('I am delayed'), 5*1000) // after 5 seconds(5*1000)
// console.log('done')

//example 02
// setTimeout(()=> console.log('I am delayed'), 0)
// console.log('done')

//example 03

const obj = {
    personName: 'shashank',
    greet: function(){
        console.log(`Hello, ${this.personName}`)
    }
}
// setTimeout(obj.greet, 2*1000) //we don't call greet function, automatically call greet function after 2 seconds

//Exmple 04 (interview quastion)

console.log(`Hello form JS`)

setTimeout(()=> console.log(`A 2 S`),10 * 1000)

console.log(`Bye Bye`)

//Example 05
//setTimeout with Binding 

const obj1 = {
    greet: function(){
        console.log(`Hello,${this.personName}`)
    },
}
console.log(`Hi`)

setTimeout(obj1.greet.bind(obj), 5 * 1000)

console.log(`bye`)

