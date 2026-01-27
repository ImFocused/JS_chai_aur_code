const selected = document.querySelector(".language");  // class language selected
document.body.style.backgroundColor = "black";  // body bg color black and font color white 
document.body.style.color = "white";

// CREATING ELEMENT

function addLang(langname) {  
    const li = document.createElement("li");   // not much optimized but can use this too 
    li.innerHTML = `${langname}`;
    document.querySelector('.language').appendChild(li);
}

addLang("Python");
addLang("typescript");

function addLangOpti (langname) {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(langname));  // more optimized as we're creating a new text node and appending it to the created element
    document.querySelector(".language").appendChild(li);
}

addLangOpti("JAVA");
addLangOpti("CPP");

// MODIFYING ELEMENT 

const secondlang =  document.querySelector("li:nth-child(2)");
const new_toadd = document.createElement("li");
new_toadd.textContent = "MOJO";  // we can directly too change the innerHTML
secondlang.replaceWith(new_toadd)  // here replaced the existing node with new created one 


// const firstlang =  document.querySelector("li:nth-child(1)");  
// starts from 1 or ("li:first-child")
// console.log(firstlang.innerText);

// REMOVING ELEMENT

const lastele = document.querySelector("li:last-child");
lastele.remove();

