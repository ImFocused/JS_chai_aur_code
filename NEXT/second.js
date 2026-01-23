const div = document.createElement('div');
div.className = "main";
div.id = Math.round(Math.random()*10);
div.innertext = "HELLO DIV ";
div.setAttribute("title","this is a div");
console.log(div);
div.style.backgroundColor = "lightblue";
div.style.padding = "10px";
document.body.appendChild(div);