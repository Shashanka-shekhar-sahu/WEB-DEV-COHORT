// Array Object
let chaiTypes = ["masala chai","ginger chai", "green chai"]

//console.log(chaiTypes[2])
//console.log(`total chai types:${chaiTypes.length}`)

//Methods
//console.log(chaiTypes.push("herbal tea"))// push in to last position

//console.log(chaiTypes.pop())

//Example
let index = chaiTypes.indexOf("green chai")
if (index !== -1) {
    chaiTypes.splice(index, 1)
}
//console.log(index)

//when i change green chai to Green tea then 
let index1 = chaiTypes.indexOf("Green tea")
if (index1 !== -1) {
    chaiTypes.splice(index1, 1)
}
//console.log(index1)


// Loop
// forEach loop
chaiTypes.forEach((chai, index) =>{
    console.log(`${index + 1}:${chai}`)
})

// Joining two Arrays
let moreChaiTypes = ["oolong tea","white tea"]

let allChaiatypes = chaiTypes.concat(moreChaiTypes)
console.log(allChaiatypes)

let newChaiTypes = [...chaiTypes,"chomoline tea"]
console.log(newChaiTypes)
