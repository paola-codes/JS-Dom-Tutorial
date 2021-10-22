var elem = document.createElement("h1");
elem.innerHTML = "Hello World";
document.querySelector("#myDiv").appendChild(elem);

//Your code here
// Don'change the code above
var newelem = document.createElement("p");
newelem.innerHTML = "Hello World";
newelem.style.background = "yellow";
document.querySelector("#myDiv").appendChild(newelem);

//Another Way
document.querySelector("#myDiv").innerHTML = "<p style = 'background-color: yellow;'>Hello World</p>";