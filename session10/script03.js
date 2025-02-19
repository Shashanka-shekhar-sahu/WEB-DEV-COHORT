//Constructor
// - There are 2 types of constructor(1. Default constructor, 2. parameterized constructor)

// 1. Default constructor
// - When we don't create constructor, that time automatilly create constructor by machine.
// example

class person{
    //constructor(){  } // (automatilly create constructor by machine.)
    }
    const p = new person()
    console.log(p)


    
// 2. Parameterized constructor
// example
    
    class person2{
        constructor(fName, lName){
            this.fName = fName
            this.lName = lName
        }
        getFullName(){
            return `${this.fName} ${this.lName}`
        }
    }
    
    const p1 = new person2('shashank','sahu')
    const p2 = new person2('shibanee','sahu')
    console.log(p1.getFullName())
    console.log(p2.getFullName())