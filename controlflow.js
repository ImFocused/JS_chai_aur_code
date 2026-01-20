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