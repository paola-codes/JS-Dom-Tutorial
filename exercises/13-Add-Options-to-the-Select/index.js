window.onload = function() {
	console.log("The website was loaded...");
	let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

  // your code here
	let dropdownMenu = document.querySelector("#mySelect");
	
	countries.map(name=>{
		dropdownMenu.innerHTML += `<option>${name}</option>`; 
	});

	dropdownMenu.addEventListener("change", (event)=>{
		alert(event.target.value);
	});

};


