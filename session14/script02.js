  //promise
  // all primise are use (micro task queqe)
  // for best visualization go to https://www.jsv9000.app/
  
  //Example 01
  console.log(`Hi`)
 setTimeout(() =>  console.log(`Hello world 0s`),0)
Promise.resolve().then(() => console.log(`promise resolve successfully`))
console.log(`bye`)



// High Level Design(HLD) = Superficial
// Low Level Design (LLD) = in depth

/*Global Exicution Context(GEC)
it have 2 phase
1. Memory Phase(function,variable are load
                 all variable value are undefined but function's all value are copying  )
2. Code Phase
*/


//Hoisting
//Example 01
console.log(`Age is`,age)
var age = 25
console.log(`Age is`,age)


//Example 02 
console.log(`Age is`,age)
var age = 25
function test(){
    console.log(`Testing`)
}
console.log(`Age is`,age)
test()

// let and  const variable are hoisting but js dont't use them(in this condation it will happend temporial Dead Zone(TDZ) )
//Example
console.log(`Age is`, age)
//this line is DEAD ZONE(43) 
// when we don't defined the variable that time the error show  (ReferenceError: age is not defined)
let ages = 25
// when we exicute this it can throw a error (ReferenceError: Cannot access 'age' before initialization)
