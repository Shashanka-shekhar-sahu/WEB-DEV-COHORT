// Small Recap about JAVA SCRIPT
//Data Types
//01. Primitive
     //Number
     let pie = 3.14
     //String
     let str = "shashank"
     //Boolean
     let isTrue
     //Null
     let  nothing = null
     //console.log(typeof nothing)//object
     //Undefined
     let undefinedVar = undefined
     //Symbol
     let symbolVar = Symbol()
     //BigInt
     let BigInt = 1234567891234
    

 //02. Non Primitive, Object
      //Object
      let person ={
        name:"shashank",
        age:24,
        isStudent: true
      }
      //Array
      let arr = [1, 2, 3, 4]

//convert one data type to another data type
//Example 01
let num = "42"  
let convertedNum = Number(num)  
let convertedNum02 = +num
let convertedNum03 = parseInt(num)

//console.log(convertedNum02)
//console.log(convertedNum03)
//console.log(convertedNum)
//console.log(typeof convertedNum) 

//Example 02
let num01 = "42a"  
let convertedNum04 = Number(num)  

//console.log(convertedNum04)

//console.log( typeof num04)
//console.log(typeof convertedNum04) 

//Example 03
let str1 = 123
let convertedString = String(str1)

console.log(convertedString)