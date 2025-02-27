// function
function greet(name) {
    console.log(`Hello ${name}`);
  }
  
  // greet("shashanka");
  // greet("saroj");
  


  let globalVar = "I am global";
  
  function modifyGlobal() {
    globalVar = "I am modified";
    let blockScopedVar = "I am blocked-scoped";
    console.log(blockScopedVar);
  }
  
  // modifyGlobal();
  
//immidately invoked function expression (IIFE))
  let config01 = function(){}() //01

  //(()=>{})                       //02

  let config = (function () {
    let settings = {
      theme: "dark",
    };
    return settings;
  })();                        //03
  

// This keyword
  let person1 = {
    personsName: "Jyoti",
    greet: function () {
      console.log(`Hello, ${this.personsName}`);
    },
  };
  

  let person2 = {
    personsName: "Ranju",
  };
  
  //call()
  person1.greet.call(person2);

  //bind()
  const bindGreet = person1.greet.bind(person2);
  console.log(bindGreet)
  console.log(bindGreet())



  let person3 = {
    personsName: "shibanee",
    greet: function(){
        console.log(`Hello, ${this.personsName}`)
    }
  }

  let person4 = {
    personsName: "Chandan"
  }

  //to change the context
  person3.greet.call({personsName: "Sourav"})

//callback function
//syntex
//() =>