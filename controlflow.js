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