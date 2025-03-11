// To convert legacify code  to Promisified code

//legacify code 

const fs = require('fs');

console.log('Starting Program');

fs.readFile('./hello.txt', 'utf-8', (err, content) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    fs.writeFile('./backup.txt', content, (err) => {
        if (err) {
            console.error('Error writing file:', err);
            return;
        }

        fs.unlink('./hello.txt', (err) => {
            if (err) {
                console.error('Error deleting file:', err);
                return;
            }

            console.log('All Done');
        });
    });
});




// Promisified code
const fs = require('fs')

function readFileWithPromise (filepath, encoding){
    return new Promise((resolve, reject) => {
        fs.readFile(filepath, encoding, (err, content) => {
            if(err) {
                reject(err)
            } else {
                resolve(content)
            }
        })
    })
}


function writeFileWithPromise (filepath, content){
    return new Promise((resolve, reject) => {
        fs.writeFile(filepath, content, (err) => {
            if(err) {
                reject(err)
            } else {
                resolve()
            }
        })
    })
}


function unlinkFileWithPromise (filepath){
    return new Promise((resolve, reject) => {
        fs.unlink(filepath, (err) => {
            if(err) {
                reject(err)
            } else {
                resolve()
            }
        })
    })
}


readFileWithPromise('./hello.txt', 'utf-8')
.then((content) => writeFileWithPromise('./backup.txt', content))
.then(() => unlinkFileWithPromise('./hello.txt'))
.catch((e) => {}).catch((e) => {})
.finally((e) => console.log('All Done'))

//result.then((e) => {}).catch((e) => {})

console.log('Starting Program')// To convert legacy callback-based code to Promisified code

// Legacy code (Using callbacks)

const fs = require('fs'); // Importing the built-in 'fs' module for file system operations

console.log('Starting Program'); // Logs "Starting Program" before the asynchronous operations

fs.readFile('./hello.txt', 'utf-8', (err, content) => {
    // Reads the content of 'hello.txt' with 'utf-8' encoding
    if (err) {
        console.error('Error reading file:', err); // Logs an error if reading fails
        return; // Exits the function if an error occurs
    }

    fs.writeFile('./backup.txt', content, (err) => {
        // Writes the read content to 'backup.txt'
        if (err) {
            console.error('Error writing file:', err); // Logs an error if writing fails
            return; // Exits the function if an error occurs
        }

        fs.unlink('./hello.txt', (err) => {
            // Deletes 'hello.txt' after successfully writing to 'backup.txt'
            if (err) {
                console.error('Error deleting file:', err); // Logs an error if deleting fails
                return; // Exits the function if an error occurs
            }

            console.log('All Done'); // Logs 'All Done' if all operations succeed
        });
    });
});

// ----------------------------------------------------------------
// Promisified code (Using Promises)

const fs = require('fs'); // Importing the 'fs' module

function readFileWithPromise(filepath, encoding) {
    // Function to read a file and return a Promise
    return new Promise((resolve, reject) => {
        fs.readFile(filepath, encoding, (err, content) => {
            if (err) {
                reject(err); // Rejects the promise if an error occurs
            } else {
                resolve(content); // Resolves the promise with file content
            }
        });
    });
}

function writeFileWithPromise(filepath, content) {
    // Function to write data to a file and return a Promise
    return new Promise((resolve, reject) => {
        fs.writeFile(filepath, content, (err) => {
            if (err) {
                reject(err); // Rejects the promise if an error occurs
            } else {
                resolve(); // Resolves the promise if the write operation is successful
            }
        });
    });
}

function unlinkFileWithPromise(filepath) {
    // Function to delete a file and return a Promise
    return new Promise((resolve, reject) => {
        fs.unlink(filepath, (err) => {
            if (err) {
                reject(err); // Rejects the promise if an error occurs
            } else {
                resolve(); // Resolves the promise if the delete operation is successful
            }
        });
    });
}

// Sequential execution using Promises
readFileWithPromise('./hello.txt', 'utf-8')
    .then((content) => writeFileWithPromise('./backup.txt', content)) // Reads 'hello.txt' and writes its content to 'backup.txt'
    .then(() => unlinkFileWithPromise('./hello.txt')) // Deletes 'hello.txt' after writing
    .catch((e) => {}) // Catches errors (empty here, so errors are not logged)
    .catch((e) => {}) // Redundant second `.catch()` (not needed)
    .finally((e) => console.log('All Done')); // Ensures 'All Done' is logged whether an error occurs or not

    //result.then((e) => {}).catch((e) => {})

console.log('Starting Program'); // This logs before the async operations complete due to JavaScript's non-blocking nature
