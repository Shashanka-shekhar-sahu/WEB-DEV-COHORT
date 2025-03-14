// Polyfill of Promise 

class MyPromise {
  constructor(executorFn) {
    this._state = 'pending'; // Initial state of promise is 'pending'
    this._successCallbacks = []; // Stores success callbacks (for then)
    this._errorCallbacks = []; // Stores error callbacks (for catch)
    this._finallyCallbacks = []; // Stores finally callbacks (for finally)

    this.value = undefined; // Stores resolved value

    executorFn(
      this.resolverFunction.bind(this), // Binds resolverFunction to this instance
      this.rejectorFunction.bind(this) // Binds rejectorFunction to this instance
    );
  }

  then(cb) {
    if (this._state == 'fulfilled') {
      console.log(`Apka promise toh pehle hi pura hogya, Run hi kar deta hu`); // Logs if promise was already resolved
      cb(this.value); // Runs callback immediately if promise was fulfilled
      return this; // Returns the promise instance for chaining
    }

    this._successCallbacks.push(cb); // Pushes success callback to array for later execution
    return this; // Returns the promise instance for chaining
  }

  catch(cb) {
    if (this._state == 'rejected') {
      console.log(`Apka promise toh pehle hi reject hogya, Run hi kar deta hu`); // Logs if promise was already rejected
      cb(); // Runs callback immediately if promise was rejected
      return this; // Returns the promise instance for chaining
    }
    this._errorCallbacks.push(cb); // Pushes error callback to array for later execution
    return this; // Returns the promise instance for chaining
  }

  finally(cb) {
    if (this._state !== 'pending') {
      cb(); // Runs callback immediately if promise is already settled
      return this; // Returns the promise instance for chaining
    }
    this._finallyCallbacks.push(cb); // Pushes finally callback to array for later execution
    return this; // Returns the promise instance for chaining
  }

  resolverFunction(value) {
    console.log(
      `Fullfilling Promise, Running ${this._successCallbacks.length} callbacks`
    ); // Logs number of success callbacks being executed
    this.value = value; // Stores resolved value
    this._state = 'fulfilled'; // Updates state to 'fulfilled'
    this._successCallbacks.forEach((cb) => cb(value)); // Executes all success callbacks
    this._finallyCallbacks.forEach((cb) => cb()); // Executes all finally callbacks
  }

  rejectorFunction(err) {
    this._state = 'rejected'; // Updates state to 'rejected'
    this._errorCallbacks.forEach((cb) => cb(err)); // Executes all error callbacks
    this._finallyCallbacks.forEach((cb) => cb()); // Executes all finally callbacks
  }
}

function wait(seconds) {
  const p = new MyPromise((resolve, reject) => {
    resolve('Hahaha'); // Immediately resolves the promise with value 'Hahaha'
  });
  return p; // Returns the created promise
}

const p = wait(5); // Calls wait function and stores the promise

console.log('Registering Callbacks'); // Logs that callbacks are being registered

p.then((e) => console.log(`V1 Promise Resolved After 5 sec`, e)) // Registers success callback for promise p
  .catch(() => console.log(` V1Rejected after 5 sec`)) // Registers error callback for promise p
  .finally(() => console.log(` V1 Mei toh harr baar chalunga`)); // Registers finally callback for promise p

p.then((e) => console.log(`V2 Promise Resolved After 5 sec`, e)) // Registers another success callback for promise p
  .catch(() => console.log(`V2 Rejected after 5 sec`)) // Registers another error callback for promise p
  .finally(() => console.log(`V2 Mei toh harr baar chalunga`)); // Registers another finally callback for promise p
