// Polyfill
const arr2 = [1, 2, 3]
if(! Array.prototype.fill){
    // fallback - polyfill - backup function
    Array.prototype.fill = function(){

    }
}

arr2.fill(4)

//example 01
// forEach

if (! Array.prototype.myForEach) {
    Array.prototype.myForEach = function(userFn){
        const originalArr = this // to point the current object

        for(let i = 0; i < originalArr.length; i++){
            userFn(originalArr[i], i)
        }
         
    }
}

const arr = [1, 2, 3, 4, 5, 6] 


// Signature - No return, Function input, value, index
// calls my fn for every value

const ret = arr.myForEach(function(value, index){
    console.log(` My For Each Value at Index ${index} is ${value}`)
})

console.log(`Ret is ${ret}`)


//example 02
// .map


if(!Array.prototype.myMap){
    Array.prototype.myMap = function(userFn){
    const result = []

        for (let i = 0; i < this.length; i ++){
            const value = userFn(this[i], i)
            result.push(value)
        }
        return result
    }    
}
//Signature .map
// Return? - New Array, Each ele Iterate, userFn
const n = arr.map((e) => e* 2)

const n2 = arr.myMap((e) => e * 3)
console.log(n)
console.log(arr)
console.log(n2)


//example 03
// .filter

// Signature: Return - new array | input : userFn,
// If userfunction is return True then  include Current value in new array 


if(!Array.prototype.myFilter){
    Array.prototype.myFilter = function(userFn){
    const result = []

        for (let i = 0; i < this.length; i ++){
            if (userFn(this[i])){
                result.push(this[i])
            }
        }
        return result
 
    }
}    
const n3 = arr.myFilter((e) => e % 3 == 0)
console.log(n3)