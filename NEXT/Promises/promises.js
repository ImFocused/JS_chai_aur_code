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