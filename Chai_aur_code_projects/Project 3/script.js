const clock = document.getElementById("clock"); // also can try queryselector

setInterval(function(){  // setinterval is used to call a function repeatedly at specified intervals
    const date  = new Date();
    clock.innerHTML = date.toLocaleTimeString();
},1000);