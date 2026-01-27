// IF ELSE 
if(2==2) console.log("IMPLICIT SCOPE")

const month = 3 
switch(month){
    case 1 : 
        console.log("JAN");
        break;
    case 2 : 
        console.log("FEB");
        break;
        
    case 3 : 
        console.log("MAR");
        break;
    default : 
        console.log("Default") // except default all gets executed if break is not there 
        break;
        
}

// FALSY VALUES 
// 0, Nan , Null , Undefined , BIGint 0n , "" , false , -0 

// TRUTHY VALUES 
// 1, "0" , 'false' , "anything in the string (space too!!!)" , [] , {} , function(){} 

// how to check if object is empty or not 
const empobj = {}

if(Object.keys(empobj).length == 0){       // as Object.keys() returns an array 
    console.log("EMPTY")
}

// ternary operator 
//condition ? true ; false

// FOR - OF LOOP 
// Can also be used for MAP datatype which is unique , in key value pairs and like object 
// map are not iterable

arr = [1,2,3,4,5]
for(const num of arr){
    console.log(num)
}

str = "Hello Pro!"
for(const letters of str){
    console.log(`Each letter is ${letters}`)
}

// FOR IN loop specially for objects and for ARRAYS too but gives indexes as arrays keys are indexes

const myobj = {
    js : 'javascript',
    cpp : 'c++',
    rb : 'ruby'
};

for (items in myobj){
    console.log(`${items} is shortcut for ${myobj[items]}`);  // [] for value pairs
}

const myarr1 = ["js","cpp","py"]
for(keys in myarr1){
    console.log(keys);
}

// FOREACH uses callback function 
// Forrach never returns a value 

myarr1.forEach(function(items) {
    console.log(items)
})

myarr1.forEach((val)=>{  // val or anything can write
    console.log(val)
})

// can also be used for array of objects to get values easily
// [ {}, {}, {} ]

//FILTER 

const marr = [1,2,3,4,5,6,7,8]

const filtered = marr.filter((num)=>{
    return num>4
})
console.log(filtered)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let history_books = books.filter((bk)=> bk.genre === "History");
console.log(history_books)

// MAP

const marray = [1,2,3,4,5,6,7,8]

let addn = marray.map((nums)=>nums+10)   // if {blocks} used write return 
console.log(addn)

// map , filter can be CHAINED together by applying to each another

// REDUCE

mynums = [1,2,3,4,5]

const numbers = mynums.reduce(function(accumulator,currval){    // reduce an array to single function using applying methods
    console.log(`Accumulator is: ${accumulator} and currvalue is ${currval} `);   // uses accumulator to get the previous value 
    return accumulator + currval;  
},0 )   // starts from zero 



const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0) // as initial cart value is 0

console.log(priceToPay);

