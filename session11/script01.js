//01
// important for interview

Function.prototype.describe = function(){
    console.log(`Function name is ${this.name}`)
}

function greet(name){  // (name) = this is called parameter,placeholder
    return `Hello ${name}`
}

//greet.describe('shashank') //('shashank') = this is called argument
greet.describe()
