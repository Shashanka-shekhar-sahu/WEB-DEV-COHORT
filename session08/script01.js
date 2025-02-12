 // question 
// 1. Create an array containing different types of teas.
const teas = ["masala tea",  "black tea", "oolong tea", "green tea", "white tea", "harbal tea"]
console.log(teas)

//2. Add "Chamomile tea" to the existing list of teas.
teas.push("chamomile tea")
console.log(teas)

//3. Remove "oolong Tea" from list of teas.
const index = teas.indexOf("oolong tea")
if (index >= -1) {
    teas.splice(index, 1)
}
console.log(teas)

//4. Filter the list to only include teas that are caffeinated.
const caffeinatedTeas = teas.filter((tea)=> tea !== ("harbal tea"))
console.log(caffeinatedTeas)

//5. Sort the list of teas in alphabetical order.
console.log(teas.sort())

//6. Use the for loop to print each type of tea in the array.

//7. Use a for loop to count  many  teas are caffeinated(excluding "Harbal Tea").
//8. use a for loop to create an array with all tea names in uppercase.
//9. Use a for loop to find the teas name with the most characters.
//10. Use a for loop to reverse the order of teas in the array.
 
