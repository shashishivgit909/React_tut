//Note: ES6 modules provide a more standardized way of importing and exporting functionality between files, and they can be used both in browser-based and Node.js environments.
//T:1 Exporting Multiple Things (Named Exports):

// utils.js
export function add(a, b) {
    return a + b;
  }
  
  export function subtract(a, b) {
    return a - b;
  }
  
// #Importing Multiple Things (Named Imports):
// In another file, you can import these functions individually using curly braces and their corresponding names: as shown in below file: app.js

//  app.js
import { add, subtract } from './utils';

console.log(add(5, 3)); // Outputs: 8
console.log(subtract(10, 4)); // Outputs: 6

//T2:You can also use aliases while importing, allowing you to use a different name for the imported function:

// app.js
import { add as addition, subtract } from './utils';

console.log(addition(5, 3)); // Outputs: 8
console.log(subtract(10, 4)); // Outputs: 6

//T3:Default Export with Named Exports:You can also have a default export along with named exports in the same module:

// utils.js
export default function multiply(a, b) {
    return a * b;
  }
  
  export function divide(a, b) {
    return a / b;
  }
  
  //When importing the default export along with named exports, you can import the default export using any name you choose: , but named should be inside {}
  // app.js
import multiplication, { divide } from './utils';

console.log(multiplication(3, 4)); // Outputs: 12
console.log(divide(20, 5)); // Outputs: 4
