const myarr = [0,1,2,3,4]
const myarr2 = new Array(1,2,3,4,5) // another method to declare
console.log(myarr)
console.log(myarr2)

// slice -> creates a new array and operates on it 
// splice -> changes the og array and returns it 

const arrr = [1,2,3,4,5]
console.log(arrr.slice(1,3)) // excludes last term [2,3]

console.log(arrr.splice(1,3)) // doesnt exclude last term [2,3,4]

// when we push one array to another the whole array gets transferred as a single element
// .concat method is used which returns a new array 

// the best is SPREAD method which spreads all the elements 

const arr1 = [1,2,3]
const arr2 = [4,5,6]
const arr3 = [...arr1,...arr2] // SPREAD 
console.log(arr3)

const arr4 = [1,2,3,[4,5,6,[7,8,[9,10]]]]
// we can flatten this array with 
const arr5 = arr4.flat(Infinity) //depth have to give 
console.log(arr5)

console.log(Array.from("PRO")) // Makes an array
const score1 = 100;
const score2 = 200;
let score3 = 300; 
console.log(Array.of(score1,score2,score3))
