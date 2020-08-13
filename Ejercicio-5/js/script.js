let parentElement = document.getElementById('parentElement');

let theFirstChild = parentElement.firstChild;

let newElement = document.createElement("p");

parentElement.insertBefore(newElement, theFirstChild);