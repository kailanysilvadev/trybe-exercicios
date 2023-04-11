// Requisito 1
const title = document.createElement('h1');
title.innerText = 'TrybeTrip - Agência de Viagens'
const getBody = document.querySelector('body');
getBody.appendChild(title);

// Requisito 2

const main = document.createElement('main');
main.className = 'main-content'
getBody.appendChild(main);
console.log(getBody)
