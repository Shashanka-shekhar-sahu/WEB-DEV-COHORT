
// callback  = A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

// Example 01 of callback function





// Example 02 of callback function


//----------------------------------------------------------------

//Synchronized code = Blocking Code

//Example
/*const fs = require('fs')
console.log('Starting Program')

const contents = fs.readFileSync('./hii.txt', 'utf-8')
console.log('File Reading Success',contents)
console.log('End of Program')*/

//----------------------------------------------------------------

// Asynchronized code = Non blocking code

// Example 01  (with out promise the async function work like this )
/*const fs = require('fs')

console.log('Starting Program')

fs.readFile('./hii.txt', 'utf8', function(err, content) {
    if(err) {
        console.log('Error in file reading', err)
    }else{
        console.log('File Reading Success',content)
    }
})

console.log('End of Program')*/

//----------------------------------------------------------------

// Example 02

/*console.log('Starting Program')
sum(2, 5, (result) =>{
    console.log('The result is ',result)
})

console.log('End of Program')

function sum (a, b, cb){
    setTimeout(() => {
        cb(a + b)
    }, 5000);  // delay 2 seconds before calling the callback function.
}*/

//--------------------- Legacy Code-------------------------------------------

// Example 03
// Read the contents of file from hello.txt 
// Then create a new file named as backup.txt
// Copy the contents of hello.txt file to backup.txt file
// Delete the hello .txt file


/*const fs = require('fs')
console.log('Starting Program')

fs.readFile('./hello.txt', 'utf8', function(err, content) {
    if(err) {
        console.log('Error in file reading', err)
    }else{
        console.log('File Reading Success',content)
        fs.writeFile('backup.txt',content, function(err){
            if (err) {
                console.log('Error in writeing backup.txt', err)
            }else{
                fs.unlink('./hello.txt', function (e) {
                    if (e) {
                        console.log('Error deleteing file', e)
                    }else{
                        console.log('File delete success')
                    }

                })
            }
        })
    }
})
// Callback Hell(this trangle shape is showing that)
console.log('End of Program')*/


//----------------------- Modern Code-----------------------------------------

// Same code write with Promise

const fsv2 = require('fs/promises')
console.log('Starting Program')

fsv2
.readFile('./hello.txt', 'utf-8')
.then((content) => fsv2.writeFile('backup.txt', content))
.then(() => fsv2.unlink('./hello.txt'))
.catch((e) => console.error('Error:', e))




