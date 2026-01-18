function addnumbers (number1,number2) // Parameters 
{
    let sum = number1 + number2
    return sum;

}
console.log(addnumbers(3,4)) // arguments 

// When we dont know the number of arguments that will be passes we use SPREAD here named as REST



console.log(calculatecartprice(100,200,300)); // Those functions can be called before declaration

function calculatecartprice (...num1) // can also write (val1,val2, ...num1)
{
    return num1; // here returned num1 
}




const addtwo = function(num) { // can also be declared like this
    return num + 2;
}
console.log(addtwo(5));  // VARIABLE FUNCTIONS CANNOT BE CALLED EARLIER BEFORE DECLARATION