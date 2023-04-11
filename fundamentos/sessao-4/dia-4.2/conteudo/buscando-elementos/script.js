//  Requisito 1
const getElement = document.querySelector('#where-are-you');

//  Requisito 2
getElement.parentNode.style.color = 'pink';

// Requisito 3
const firstChild = document.querySelector('#first-child-of-child');
firstChild.innerText = 'Olá';

// Requisito 4
let getFirstChild = document.querySelector('#parent').firstChild;

// Requisito 5
getFirstChild = document.querySelector('#where-are-you').previousSibling;

// Requisito 6
getFirstChild = document.querySelector('#where-are-you').nextSibling;

// Requisito 7
let getThirdChild = document.querySelector('#where-are-you').nextElementSibling;

// Requisito 8
getThirdChild = document.querySelector('#parent').lastElementChild.previousElementSibling;

