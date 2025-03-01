// NegativeIndex

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(arr[-1]) //undefined

function negativeIndex(arr){
        return new Proxy(arr, {
            get(target, prop){
               const index =  Number(prop)
               if(index < 0){
                   return target[target.length + index]
               }
               return target[index]
            }
        })
}


 



//Proxy
const user = {
    name: "Shashank",
    age : 24,
    password :"123"
}
// get method
const proxyUser = new Proxy(user,{
    get(target, prop){
        if (prop === "password") {
           throw new Error("Access Denied")
        }
        return target [prop] 
    },
// set method
    set(target, prop, value) {
        if (prop === "password") {
            console.log("You cannot set the password directly!");
            return false;
        }
        target[prop] = value;
        return true;
    }
})
    //console.log(proxyUser.password) // throw new Error ('Access Denied')
   // proxyUser.password = 456  //You cannot set the password directly!
     