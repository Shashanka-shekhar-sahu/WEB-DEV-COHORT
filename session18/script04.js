// Function Returning a Function
function car() {
    let bmw = {
        model: "BMW 520",
        year: 2020,
        color: "Red"
    }
    return function () {
        console.log(bmw)
    }
}

let carModel = car()
carModel()
 // car() ()     // line number 13 and 14 are same as line number 15


 // IIFE (Immediately Invoked Function Expression)
 // IIFE is a function that is executed right after it is created   (called implicitly )
 const logAudi = (function car2() {
    let audi = {
        model: "audi 520",
        year: 2025,
        color: "black"
    }
    return function () {
        console.log(audi)
    }
}) () // IIFE

logAudi();



