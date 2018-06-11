const container = document.querySelector('.container');
const output = document.querySelector('.output');
createDiv(16);
function gridValue() {
	createDiv(prompt("Enter grid size between 0 to 100 :",""));
}
function createDiv(num) {
	if (num === NaN || num > 100) {
		output.innerText = "Enter a number between 0 to 100, u moron!"
		return;
	}
	while(container.firstChild) container.removeChild(container.firstChild);

	var i;
	var sqr = num**2;
	for (i = 0;i < sqr;i++) {
		var newDiv = document.createElement('div');
		newDiv.id = 'r' + i;
		newDiv.className = "pixel";

		var k = 100/num;
		k = k + "%";
		newDiv.style.width = (k);
		newDiv.style.height = (k);

		container.appendChild(newDiv);
	}
	eventListener();
}

function eventListener() {
	var pixels = document.querySelectorAll('.pixel');
	let pixelsArray = Array.from(pixels);

	var i;
	for (i = 0;i < pixelsArray.length;i++) {
		pixelsArray[i].addEventListener('mouseover', function(event) {
			event.target.style.backgroundColor = "black";
			var opac = parseFloat(window.getComputedStyle(event.target).getPropertyValue("opacity"));
			event.target.style.opacity = opac + 0.1;
		});
	}
}
