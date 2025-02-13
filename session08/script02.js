// object
const person = {
    firstName :'shashank',
    middleName :'shekhar',
    lastName : 'sahu',
    hobbis : ['coding','reading'],
    isMarried :false,
    getFullName : function(){
        return 'shashank shekhar sahu'
    },
    address : {
        homeNumber : 123,
        street : 456,
        countryCode :'IN',
        state : 'odisha'
    }
}
console.log(person.getFullName())
