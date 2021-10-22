let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let mydiv = document.createElement("div");
	mydiv.style.background = "yellow";
	mydiv.innerHTML = "Hello World";

	document.body.appendChild(mydiv);

});

/*
Completely remove element 
document.body.innerHTML=
<div style+yello><p>H */