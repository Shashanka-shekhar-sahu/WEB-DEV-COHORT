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

console.log('Starting Program')