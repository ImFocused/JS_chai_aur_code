const div = document.createElement('div');
div.className = "main";
div.id = Math.round(Math.random()*10);
div.innerText = "HELLO DIV ";
div.setAttribute("title","this is a div");
console.log(div);
div.style.backgroundColor = "lightblue";
div.style.color = "black";
div.style.padding = "10px";
document.body.appendChild(div);  // have too append it at last as it was stored in memory only first