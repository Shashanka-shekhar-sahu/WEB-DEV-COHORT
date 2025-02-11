//Loop
//for
// sum of the existing value of an array

let array = [1,2,3,4,5,6,7,8,9,]

function sumfac(numbers){
    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i]
        // sum += numbers[i]
    }
    return sum
}

let result = sumfac(array)
console.log(result)

let anotherResult = sumfac([9,8,7,6,5,4,3,2])
console.log(`My result is ${anotherResult}`)


//example
//print all the even number between 1 to 20.

let numbers = 20
for (let i = 1; i <= numbers ; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
    
}