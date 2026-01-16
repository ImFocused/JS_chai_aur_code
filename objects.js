// created with CONSTRUCTOR are SINGLETON OBJECTS as... 
// const tinderuser = new Object()

/* objects created with LITERALS are not SINGLETON as... 
const obj = {
    name : Pj,
    roll : 5 
}
*/
const sym = Symbol("Mysym")

const obj1 = { 
    name : " PRo",
    "Full name" : "Pratham J",              // Also be declared by " " and without " "
    roll : 5,
    address : "Solapur",
    logindays : ["Monday","friday"],
    [sym] : "Mysymbol1"                         // Symbol datatype is declared with the help of []
}

console.log(obj1.name) //can call by this method too but it will not get us the " " keys 
console.log(obj1["Full name"]) // so this method is used CORRECT METHOD

// To add objects we use assign 
const obj2 ={
    a : "1",
    b : "2"
}

const obj3 = Object.assign({},obj1,obj2) // {} is used to sum all key values into one common object 
console.log(obj3)
// We can also use SPREAD here too [...obj1,...obj2]
