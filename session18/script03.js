function createCounter(stepSize = 1, initalValue = 0){
    return function(){
        initalValue =  initalValue + stepSize
        return initalValue
        }
}
const i1 = createCounter(2, 4)
console.log(i1())
console.log(i1())
console.log(i1())
console.log(i1())
console.log(i1())


// Example (Debounce function)
function createDebounceVersion (fn, delay){
    let timeId = null

    return function(){
        clearTimeout(timeId)
            timeId = setTimeout(fn, delay)
                
        }
}

function apiCall(){}

const apiCallDebounce = createDebounceVersion(apiCall, 3000)
apiCallDebounce()
