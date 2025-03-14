// Polyfill

// Polyfill for forEach method
if (!Array.prototype.myForEach) {
  Array.prototype.myForEach = function (cb) {
    for (let i = 0; i < this.length; i++) { // Iterates over each element in the array
      cb(this[i], i); // Calls the callback function with the current element and index
    }
  };
}

// Polyfill for map method
if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (cb) {
    const result = []; // Initializes an empty array to store transformed values

    for (let i = 0; i < this.length; i++) { // Iterates over each element in the array
      const value = cb(this[i], i); // Calls the callback function with the current element and index
      result.push(value); // Pushes the transformed value into the result array
    }

    return result; // Returns the new array with transformed values
  };
}

// Polyfill for reduce method
if (!Array.prototype.myReduce) {
  Array.prototype.myReduce = function (cb, initalValue = undefined) {
    let acc = initalValue || this[0]; // Sets the accumulator to initialValue if provided, otherwise uses the first element of the array
    const startIndex = initalValue ? 0 : 1; // Determines the starting index (0 if initialValue is provided, otherwise 1)

    for (let i = startIndex; i < this.length; i++) { // Iterates over the array starting from the determined index
      acc = cb(acc, this[i]); // Calls the callback function with accumulator and current element, updating the accumulator
    }

    return acc; // Returns the final accumulated value
  };
}

const arr = [1, 2, 3, 4, 5]; // Initializes an array

arr.myForEach((value, index) =>
  console.log(`At Index: ${index} Value: ${value}`) // Uses myForEach to log each index and value in the array
);

const trippedArray = arr.myMap((e) => e * 3); // Uses myMap to create a new array where each element is multiplied by 3
console.log(trippedArray); // Logs the transformed array

const res = arr.reduce(
  (abTakKiValue, currentValue) => abTakKiValue + currentValue // Uses built-in reduce to sum up all elements in the array
);

const myRes = arr.myReduce(
  (abTakKiValue, currentValue) => abTakKiValue + currentValue // Uses custom myReduce to sum up all elements in the array
);

console.log({ res, myRes }); // Logs the results of both built-in reduce and custom myReduce
