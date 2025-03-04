//  keyword = async and await 
// Synctatic Sugar ( Help to Run Async Code in Sync way, that time we use async and await keyword)


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


// Multiple Async code is running in Sync Fashion
readFileWithPromise('./hello.txt', 'utf-8')
.then((content) => writeFileWithPromise('./backup.txt', content))
.then(() => unlinkFileWithPromise('./hello.txt'))
.catch((e) => {}).catch((e) => {})
.finally((e) => console.log('All Done'))

//result.then((e) => {}).catch((e) => {})

console.log('Starting Program')


// ----------------------------------------------------------------
// Syntax change (Syntax Sugar)
 async function doTasks(){
    try{
          const fileContent = 
          await readFileWithPromise('./hello.txt', 'utf-8')
          await writeFileWithPromise('./backup.txt', fileContent)
          await unlinkFileWithPromise('./hello.txt')
   } catch (e) {
            console.error('Error:', e)  // Handle error here, this line will not execute if error is caught inside doTasks()
   } finally {
             console.log('All Done')  // This line will always execute, no matter what happens inside doTasks() or if an error is thrown.
  }         
}

 doTasks().then(() => console.log('All Done'))
