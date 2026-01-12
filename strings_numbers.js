const name = "Pro"
const repoCount = 40

// String INTERpolation with backtics and $ sign PLACEHOLDERS 

console.log(`My name is ${name} and my repocount is ${repoCount}  `)

const str = new String("Pratham J")
console.log(str.toUpperCase())
console.log(str.length)
console.log(str[0]) // Strings itself store value in the form of key value pairs 

// charAt used for finding char on supplied index charAt(2)
// indexOf('y') for finding the index number 

// str.substring(start,end) => only accepts positive values of start , end
// str.slice(start,end) => accepts all

// str.replace

console.log(str.split(" "))
// creates new splitted array from strings 

// NUMBERS -------------------------------------------------------------------------------------------------------------

const num2 = new Number(1000)
console.log(num2.toFixed(3)) // to fixed decimals NUMBER PROPERTY 

console.log(num2.toString())
console.log(num2.toString().length) // here we can convert numbers to strings to use more props

console.log(num2.toLocaleString("En-IN")) // used for convenience of commas between numbers default is USA

// Math function Math.abs(-4) , Math.round() ,  Math.ceil() , Math.floor() 
// Math.random() // always gets values between 0 to 1

const max = 20;
const min = 10;

console.log(Math.floor((Math.random())* (max-min+1)+min)) // for generating random value between max and min