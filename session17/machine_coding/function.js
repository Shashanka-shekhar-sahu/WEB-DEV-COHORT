// Example 01
function abc(fn, delay) {
    console.log(arguments)
    let myId
    return function ( ) {
        
    }
}
abc("shashank", 2)
//myId = 3 // this time myId is not modifying


// function fnName (parameter){ 
//let myId  // variable
//  }
// when a function return a function is called higherOrder function
// 

// Example 02
function abcd(fn, delay) {
    console.log(arguments)
    let myId
    return function (...args) {
        setTimeout(() => {       // setTimeout reference is holding 
            fn.bind(this,args) // .bind is give the function with all arguments
        },delay)      
    }
}


// Example 03 // debouncing function

function abcd(fn, delay) {
    let myId
    return function (...args) {
        clearTimeout(myId) // clear the previous setTimeout
        setTimeout(() => {
            fn.bind(this,args)
        },delay)      
    }
}
function greet(name) {
    console.log(`Hello ${name}`)
}
 const xyz = abcd( () => greet(("shashank", 4000)))
xyz()
xyz()
xyz()

// Example 04
function car(fn , delay) {
    let myId = null
    return(...args) =>{
        if (myId === null) {
            fn(... args)
            myId = setTimeout(() => {
                myId = null
            },delay)
        }
    }
}

car()//first time call this function, after calling this function myId is null  // thread link  
car()// second time when we call this function that time run the function but not return anythings
car() 