//condition
//if else
let numOfPerson = 2
let pizzaSize
if (numOfPerson <= 2) {
    pizzaSize = "small"
} else {
    pizzaSize = "large"
}
console.log(pizzaSize)


// if-else(ulternate)
let voter =15
    if (voter>18){
        console.log("elegible")
}
    else{
    console.log("not-elegible")
    }
// if-elseif-else
let numberOfPeople = 3
if(numberOfPeople <= 2){
    console.log("small pizza")
}
else if(numberOfPeople <= 4){
    console.log("medium")
}
else{
    console.log("large")
}


//example
function calculateGrade(score){
    if(score >= 90){
        return "A+"
    }
    else if (score >=80) {
        return "A"
    }
    else if (score >=60) {
        return "B"
    }
    else if (score >=40) {
        return "c"
    }
    else{
        return "F"
    }
}
let grade = calculateGrade(30)
console.log(grade)
