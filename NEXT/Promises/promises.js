const promise1 = new Promise(function(resolve,reject){  // storing in a variable is not necessary 

    // we can directly apply .then method to the new promise obj  

    // do an async task
    // DB calls, cryptography, networks

    setTimeout(function(){
        console.log("async task is completed!");
        resolve();  // her we have to call resolve as it suggests the promise is consumed
    },1000);

})

promise1.then(function(){  // promise consumed using then keyword
    console.log("RESOLVED i.e promise consumed ")
})

console.log(typeof promise1)


const promise2 = new Promise(function(resolve,reject){  
  

    setTimeout(function(){
        console.log("async task is completed!");
        resolve({"name": "pro", "email" : "pratham@example.com"});  // using resolve the data is passed too in the form of objects 
    },1000);

})

promise2.then(function(user){  // promise consumed using then keyword
    console.log(user)
})


// .catch for reject
// .finally that gets executed always 

fetch("https://api.github.com/users/ImFocused")
.then((response)=>{
    return response.json();   // converts it in object format for readability json also returns promise
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error))