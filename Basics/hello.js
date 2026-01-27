"use strict" // used to treat all js code as newer version
console.log("hello!!!")
let age =18
let name ="pro"
console.log(typeof name)
console.log(typeof null) // object 

let ageinstr = Number(age); // String , Boolean 
console.log(ageinstr);
console.log(typeof ageinstr); // if value is not number then it gives NaN ! for all except null
// Null is too converted to 0 from str to number 

// Empty string to boolean is False and others is true (for strings)

console.log("2"===2) // === strict checks value as well as datatype
console.log("2"==2)

console.log(null == 0) // but equality operator works different
console.log(null < 0) 
console.log(null <= 0)  // Null here be referred as zero and when it checks with zero its true

// and UNDEFINED gives false for all except NULL == UNDEFINED 

// BigInt data type is used by using n at last of number to be input