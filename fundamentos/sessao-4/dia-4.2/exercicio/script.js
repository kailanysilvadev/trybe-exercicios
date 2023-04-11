// Requisito 1

const title = document.createElement('h1');
title.innerText = 'TrybeTrip - Agência de Viagens'
const getBody = document.querySelector('body');
getBody.appendChild(title);

// Requisito 2

const main = document.createElement('main');
main.className = 'main-content';
getBody.appendChild(main);

// Requisito 3

const section = document.createElement('section');
section.className = 'center-content';
main.appendChild(section);

// Requisito 4

const paragraph = document.createElement('p');
paragraph.innerHTML = '<b>Compre aqui sua passagem</b> e seja feliz';
section.appendChild(paragraph);

//  Requisito 5