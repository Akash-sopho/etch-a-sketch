const container = document.querySelector('.container');
const output = document.querySelector('.output');

function createDiv() {
	var num = parseInt(prompt("Enter the size of the grid :", ""));
	if (num === NaN) {
		output.innerText = "Enter a fking number, u moron!"
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
}