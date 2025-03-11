//  keyword = async and await 
// Syntactic Sugar (Helps to run async code in a sync-like manner using async and await)

const fs = require('fs') 
// Importing the built-in 'fs' module for file system operations

function readFileWithPromise(filepath, encoding) {
    // Function to read a file asynchronously and return a Promise
    return new Promise((resolve, reject) => {
        fs.readFile(filepath, encoding, (err, content) => {
            // Reads the file with the given encoding
            if (err) {
                reject(err) 
                // Rejects the promise if there's an error
            } else {
                resolve(content) 
                // Resolves the promise with the file content
            }
        })
    })
}

function writeFileWithPromise(filepath, content) {
    // Function to write data to a file asynchronously and return a Promise
    return new Promise((resolve, reject) => {
        fs.writeFile(filepath, content, (err) => {
            // Writes content to the specified file
            if (err) {
                reject(err) 
                // Rejects the promise if an error occurs
            } else {
                resolve() 
                // Resolves the promise if the write operation is successful
            }
        })
    })
}

function unlinkFileWithPromise(filepath) {
    // Function to delete a file asynchronously and return a Promise
    return new Promise((resolve, reject) => {
        fs.unlink(filepath, (err) => {
            // Deletes the specified file
            if (err) {
                reject(err) 
                // Rejects the promise if an error occurs
            } else {
                resolve() 
                // Resolves the promise if deletion is successful
            }
        })
    })
}

// Multiple async operations executed in a synchronous-like sequence
readFileWithPromise('./hello.txt', 'utf-8')
    .then((content) => writeFileWithPromise('./backup.txt', content))
    // Reads 'hello.txt', then writes its content to 'backup.txt'
    .then(() => unlinkFileWithPromise('./hello.txt'))
    // Deletes 'hello.txt' after successful writing
    .catch((e) => {}) 
    // Catches and handles any errors (empty here, so no error logging)
    .catch((e) => {}) 
    // Redundant second `.catch()` (not needed)
    .finally((e) => console.log('All Done'))
    // Ensures 'All Done' is logged whether an error occurs or not

// Logging message to show asynchronous execution
console.log('Starting Program') 
// This will execute before the promises resolve due to async behavior

// ----------------------------------------------------------------
// Syntax change (Syntax Sugar)
async function doTasks() {
    // Declares an asynchronous function using async/await
    try {
        const fileContent = await readFileWithPromise('./hello.txt', 'utf-8')
        // Reads 'hello.txt' and waits for its completion
        await writeFileWithPromise('./backup.txt', fileContent)
        // Writes the file content to 'backup.txt' and waits for completion
        await unlinkFileWithPromise('./hello.txt')
        // Deletes 'hello.txt' and waits for completion
    } catch (e) {
        console.error('Error:', e)  
        // Logs any error that occurs during execution
    } finally {
        console.log('All Done')  
        // Ensures 'All Done' is logged no matter what
    }
}

doTasks().then(() => console.log('All Done'))
// Calls doTasks(), and once it's done, logs 'All Done' again (redundant)
