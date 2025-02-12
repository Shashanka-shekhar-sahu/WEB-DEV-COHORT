 // question 
// 1. Create an array containing different types of teas.
console.log("answer 1.")
const teas = ["masala tea",  "black tea", "oolong tea", "green tea", "white tea", "harbal tea"]
console.log(teas)


//2. Add "Chamomile tea" to the existing list of teas.
console.log("answer 2.")
teas.push("chamomile tea")
console.log(teas)

//3. Remove "oolong Tea" from list of teas.
console.log("answer 3.")
const index = teas.indexOf("oolong tea")
if (index >= -1) {
    teas.splice(index, 1)
}
console.log(teas)

//4. Filter the list to only include teas that are caffeinated.
console.log("answer 4.")
const caffeinatedTeas = teas.filter((tea)=> tea !== ("harbal tea"))
console.log(caffeinatedTeas)

//5. Sort the list of teas in alphabetical order.
console.log("answer 5.")
console.log(teas.sort())

//6. Use the for loop to print each type of tea in the array.
console.log("answer 6.")
for (let i = 0; i <= teas.length; i++) {
    console.log(teas[i]) 
}

//7. Use a for loop to count  many  teas are caffeinated(excluding "Harbal Tea").
console.log("answer 7.")
for (let i = 0; i <= teas.length; i++) {
    let caffeinatedMyteas = 0
    if (teas[i] !=="haebal tea") {
        caffeinatedMyteas ++
    }
    console.log(caffeinatedMyteas)
}

//8. use a for loop to create an array with all tea names in uppercase.
console.log("answer 8.")
const uppercaseTeas = []
for (let i = 0; i < teas.length; i++) {
    uppercaseTeas.push(teas[i].toUpperCase()) 
}
console.log(uppercaseTeas)

//9. Use a for loop to find the teas name with the most characters.
console.log("answer 9.")
let longestTeas = " "
for (let i = 0; i < teas.length; i++) {
   if (teas[i].length > longestTeas.length) {
    longestTeas = teas[i]
   }
}
console.log(longestTeas)

//10. Use a for loop to reverse the order of teas in the array.
console.log("answer 10.")
const reversedArray = []
for (let i = teas.length - 1 ; i >= 0 ; i--) {
    reversedArray.push(teas[i])
}
console.log(reversedArray)
 
