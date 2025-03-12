// Assignment Operator
// = Operator

// string (Primitive data type)
let a1 = 'car' // Declares variable a1 and assigns it the string 'car'
let a2 = a1 // Copies the value of a1 into a2 (since strings are primitive, a2 gets a separate copy)
console.log(a1) // Logs 'car'
console.log(a2) // Logs 'car'

a2 = 'bike' // Changes the value of a2, but a1 remains unchanged because primitive types are copied by value
console.log(a1) // Logs 'car' (a1 is not affected)
console.log(a2) // Logs 'bike' (a2 is updated)

a1 = 'cycle' // Updates a1 to 'cycle', but a2 remains unchanged
console.log(a1) // Logs 'cycle'
console.log(a2) // Logs 'bike'

// object (deals with memory reference)
let p1 = { 
    fName: 'shashank' // Declares an object p1 with a property fName
}
let p2 = p1 // p2 now holds a reference to the same object as p1 (not a copy)
console.log(p1) // Logs { fName: 'shashank' }
console.log(p2) // Logs { fName: 'shashank' } (both p1 and p2 reference the same object)

p2.fName = 'situl' // Modifies the fName property of the object (since p1 and p2 refer to the same object, both reflect the change)
console.log(p1) // Logs { fName: 'situl' } (p1 is also affected because both reference the same memory)
console.log(p2) // Logs { fName: 'situl' } (p2 shows the updated value)
