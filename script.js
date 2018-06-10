const table = document.querySelector('.table');
const output = document.querySelector('.output');

function createDiv() {
	var num = parseInt(prompt("Enter the size of the grid :", ""));
	if (num === NaN) {
		output.innerText = "Enter a fking number, u moron!"
	}
	var i;
	var j;
	while(table.firstChild) table.removeChild(table.firstChild);
	for (i = 0;i < num;i++) {
		var newCon = document.createElement('div');
		newCon.id = 'c' + i;
		newCon.className = 'container';
		table.appendChild(newCon);
		for (j = 0;j < num;j++) {
			var newDiv = document.createElement('div');
			newDiv.id = 'r' + j;
			newDiv.className = ('sketch');
/*
			var k = Math.round(550/num);
			k = k + "px";
			newDiv.style.width = (k);
			newDiv.style.height = (k);
*/
			newCon.appendChild(newDiv);
		}
	}
}