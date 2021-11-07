var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randombtn = document.getElementById("randombtn");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	randombtn.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";


	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
//

function initialGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	randombtn.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

window.addEventListener("DOMContentLoaded", initialGradient);  //DOMContentLoaded OR load

//

var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);

function generateRandomColor () {
	var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
	return randomColor;
}

randombtn.addEventListener ("click", function (){
	color1.value = generateRandomColor();
	color2.value = generateRandomColor();
	setGradient();
})
