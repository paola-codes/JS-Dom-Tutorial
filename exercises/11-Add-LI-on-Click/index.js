let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	let x = document.createElement("li");
	x.innerHTML = "Fourth element";
	let y = document.querySelector("#myList");
	y.appendChild(x);
});
