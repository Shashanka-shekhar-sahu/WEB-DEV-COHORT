//Question & Answer
// 01. Create an object representing a type of tea with properties for name, type and caffeine content.
const teas = {
    name : "lemon tea",
    type : "green",
    caffine : "low"
}
console.log(teas)

// 02. Access and print the name and type properties of the tea object.
console.log(teas.name)
console.log(teas["type"])

//03. Add a new property otigin to the tea object.
teas.origin = "assam tea"


//04. Change the cafeine level of the tea object to "Medium".
teas.caffine = "medium"

//05. Remove the type property from the tea object.
delete teas.type

//06. Check if the tea object has a property origin.
console.log("origin" in teas)

//07. Use a for...in loop to print all properties of the tea object.
for (let key in teas) {
    console.log(key + ":" + teas[key])
}

//08. Create a nested object representing different types of teas and their properties.
const myTeas = {
    greentea: {
        name : "green tea",
        color : "green",
        cups : {
            one: "1",
            two: "2"
        }
    },
    blacktea: {
         name : "black tea",
         color : "black"
    }
}

//09. Create a copy of the tea object.
const teaCopy = {...teas} // shallow copy

const anotherCopy = teas // (reference pass, not a copy)

 


