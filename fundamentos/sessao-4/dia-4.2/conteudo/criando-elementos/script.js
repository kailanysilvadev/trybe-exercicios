const parent = document.querySelector('#pai');
const child = document.createElement('section');
const elementoOndeVoceEsta = document.querySelector('#elementoOndeVoceEsta');
const primeiroFilhoDoFilho = document.querySelector('#primeiroFilhoDoFilho');


parent.appendChild(child);
elementoOndeVoceEsta.appendChild(child);
primeiroFilhoDoFilho.appendChild(child);

console.log(child.parentNode.parentNode.nextElementSibling);