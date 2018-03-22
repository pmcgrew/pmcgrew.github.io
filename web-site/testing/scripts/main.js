var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'image/Nobody.png') {
		myImage.setAttribute ('src','image/Symbol-Heartless.png');
	} else {
		myImage.setAttribute ('src','image/Nobody.png');
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'CSCS1240 Website, ' + myName;
}

if(!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'CSCS1240 Website, ' + storedName;
}

myButton.onclick = function() {
	setUserName();
}

