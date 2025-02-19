
//This keyword
// This keyword refer to object.

// example - 01

const obj = {
    fName :'shashank',
    lName :'sahu',
    getFullName : function(){
        if (this.lName !== undefined) {
            return `${this.fName} ${this.lName}`
            return this.fName
        }
    }
}
 console.log(obj.getFullName())



// example - 02
// DRY (Don't Repeat Yourself)
 const obj1 = {
    fName :'shashank',
    lName :'sahu',
    getFullName : function(){
        if (this.lName !== undefined) {
            return `${this.fName} ${this.lName}`
            return this.fName
        }
    }
}
const obj2 = {
    fName :'shashank',
    lName :'sahu',
    getFullName : function(){
        if (this.lName !== undefined) {
            return `${this.fName} ${this.lName}`
            return this.fName
        }
    }
}
// DRY (Don't Repeat Yourself)
console.log(obj1.getFullName())
console.log(obj2.getFullName())



// example - 03 (Importent for interview)(Inheritance)

const obj3 = {
    fName :'shashank',
    lName :'sahu',
    getFullName : function(){
        if (this.lName !== undefined) {
            return `${this.fName} ${this.lName}`
            return this.fName
        }
    }
}
const obj4 = {
    fName :'shashank',
    lName :'sahu',
}
// Prototype inheritance
obj4.__proto__ = obj3 // don't tease like this  
//obj3.__proto__ = null // (To stop the inheritance)
console.log(obj3.getFullName())
console.log(obj4.getFullName())
console.log(obj4.toString())



