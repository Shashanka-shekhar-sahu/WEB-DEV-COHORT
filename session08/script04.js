//memory (stack , heap)
let p1 = {
    fName: 'shashank'
}
let p2 = p1

p2.fName = 'shashank shekhar'

console.log(p2) // { fName: 'shashank shekhar' }
console.log(p1) // { fName: 'shashank shekhar' }
// both variable (p1,p2) are located same location
// p1 ,p2 stored in stack
// the function is stored in heap 


// Garbage Collector , Memory Leek



// next example
let s1 = {
    fName: 'situl',
    lName: 'sahu'
}

let s2 = {
    fName: s1.fName,
    lName: s1.lName
}
console.log(s1) // { fName: 'situl', lName: 'sahu' }
console.log(s2) // { fName: 'situl', lName: 'sahu' }

// change s2 value
s2.fName = 'Shashank'
s2.lName = 'Sahu'

console.log(s1) // { fName: 'situl', lName: 'sahu' }
console.log(s2) // { fName: 'Shashank', lName: 'Sahu' }

// spread operator
//a lots of key here and we will copy all the key in a different object that time we will use spread operator.

let x1 = {
    fName: 'Situl',
    lName: 'Sahu'
}

let x2 = {
   ...x1 // // spread operator
}
console.log(x1) // { fName: 'Situl', lName: 'Sahu' }
console.log(x2) // { fName: 'Situl', lName: 'Sahu' }
