// Functions
//syntex
function chai(){  }



//if-else
//Example
function prepareChai(type){
    if (type === "masala chai") {
        console.log("adding spices to the chai")
    } else {
        console.log("preparing regular chai")
    }

}

//prepareChai("masala chai") //masala chai is a argument(in this case)
//prepareChai("ginger chai")

//Question 01
/* 
In an online store, if the customer's total bill amount is more than Rs 1000, then he gets a 10% discount. otherwise, he has to pay the full amount.
*/

//Answer
function calculateTotal(amount){ //amount is a paramater(in this case)
    //convert to number
    if (amount > 1000) {
        return amount * 0.9
    } else{
        return amount
    }

  //this is also currect 
  /* if (amount > 1000) {
        return amount * 0.9
    }
        return amount*/
}

let finalBill = calculateTotal(1200)

//console.log(finalBill)
//console.log(calculateTotal(1300))


//Switch Case
//Question 02
/* 
In a traffic light system, if the light is "red", print "Stop". If it's "yellow", print "Slow down". If it's "green", print "Go
*/

//Answer
// switch case
function trafficLight(color){
    switch (color) {
        case "red":
            console.log("stop")
            break;

        case "yellow":
            console.log("slow down")
            break;

        case "green":
                console.log("go")
                break;
        
    
        default:
            console.log("nothing")
           
    }
}

//trafficLight("yellow")




//Ternary Operations
// Syntex // return isLoading ? () : ()
//Example 01

function checktruthyValue(value) {
    if (value) {
      console.log("Truthy");
    } else {
      console.log("Falsy");
    }
  }
  
//   checktruthyValue(1)           // Truthy
//   checktruthyValue(0)           // Falsy
//   checktruthyValue("shashank")  //Truthy
//   checktruthyValue("")          //Falsy
//   checktruthyValue([])         //Truthy
//   checktruthyValue([1, 2, 3])  //Truthy


  //Example 02
  /* 
In an online store, if the customer's total bill amount is more than Rs 1000, then he gets a 10% discount. otherwise, he has to pay the full amount.
*/

//Answer
function calculateTotal(amount){ //amount is a paramater(in this case)
   return amount > 100 ? amount * 0.9 :amount
    
}

let finalBill01 = calculateTotal(1200)

console.log(finalBill01)
console.log(calculateTotal(1300))


//Example 03
function login(username, password, loginIp){
    if(username === 'admin' && (password === "1234" || loginIp == "127")){
        console.log("Login successful");
        
    } else {
        console.log("Invalid credentials");
        
    }
}

