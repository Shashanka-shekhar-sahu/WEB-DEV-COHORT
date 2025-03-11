// NegativeIndex

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
// Declares an array with elements from 1 to 10

// console.log(arr[-1]) //undefined
// Accessing a negative index directly in JavaScript returns undefined because JavaScript arrays do not natively support negative indices.

function negativeIndex(arr) { 
    // Defines a function that takes an array and returns a Proxy object
    return new Proxy(arr, {
        get(target, prop) {
            // Intercepts property access
            const index = Number(prop) 
            // Converts property key (which is a string) to a number
            if (index < 0) { 
                // If the index is negative, adjust it to access the correct element
                return target[target.length + index] 
                // Returns the corresponding positive index element
            }
            return target[index] 
            // Otherwise, return the element at the given index
        },
        set(target, prop, value) { 
            // Intercepts property assignment
            const index = Number(prop) 
            // Converts property key to a number
            if (index < 0) { 
                // If the index is negative, adjust it
                target[target.length + index] = value 
                // Sets the value at the corresponding positive index
            } else { 
                target[index] = value 
                // Otherwise, sets the value normally
            }
            return true 
            // Returns true to indicate successful assignment
        }    
    })
}

let newArr = negativeIndex(arr) 
// Creates a proxy-wrapped array that supports negative indices

console.log(newArr[-1]) 
// Accesses the last element of the array using a negative index

newArr[-2] = 100 // deep copy (both arrays are changed) 
// Modifies the second last element of the array, affecting the original array as well

console.log(newArr) 
// Prints the modified proxy array

console.log(arr) 
// Prints the original array, showing that it was modified as well


// Proxy

const user = {
    name: "Shashank",
    age: 24,
    password: "123"
}
// Defines a user object with a name, age, and password

// get method
const proxyUser = new Proxy(user, {
    get(target, prop) { 
        // Intercepts property access
        if (prop === "password") { 
            // If the accessed property is "password"
            throw new Error("Access Denied") 
            // Throws an error to prevent access
        }
        return target[prop] 
        // Otherwise, returns the requested property value
    },
    // set method
    set(target, prop, value) { 
        // Intercepts property assignment
        if (prop === "password") { 
            // If attempting to modify the "password" property
            console.log("You cannot set the password directly!") 
            // Logs a message preventing password modification
            return false 
            // Returns false to indicate assignment failure
        }
        target[prop] = value 
        // Otherwise, sets the new value
        return true 
        // Returns true to indicate successful assignment
    }
})

// console.log(proxyUser.password) // throw new Error ('Access Denied')
// Attempting to access the password property will throw an error

// proxyUser.password = 456  //You cannot set the password directly!
// Attempting to set the password will log a message and prevent the change
