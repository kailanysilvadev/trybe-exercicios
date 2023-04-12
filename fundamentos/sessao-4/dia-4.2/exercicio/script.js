// Requisito 1

const title = document.createElement('h1');
title.innerText = 'TrybeTrip - Agência de Viagens';
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

const sectionLeft = document.createElement('section');
sectionLeft.className = 'left-content';
main.appendChild(sectionLeft);

// Requisito 6

const sectionRight = document.createElement('section');
sectionRight.className = 'right-content';
main.appendChild(sectionRight);

// Requisito 7

const img = document.createElement('img');
img.src = 'https://picsum.photos/200';
img.className = 'small.image';
sectionLeft.appendChild(img);

// Requisito 8

const ul = document.createElement('ul');

const liContent = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];
for(let index = 0; index < liContent.length; index +=1){
  let liPush = liContent[index];
  const li = document.createElement('li');
  li.innerText = liPush;
  ul.appendChild(li)
}
sectionRight.appendChild(ul);

// Requisito 9

const creatingH3 = (classe) => {
  let h3 = document.createElement('h3');
  h3.className = classe;
  return h3;
};

const title1 = creatingH3('description');
const title2 = creatingH3('description');
const title3 = creatingH3('description');
main.appendChild(title1);
main.appendChild(title2);
main.appendChild(title3);

// Bônus 1

title.className = 'title';

// Bônus 2 feita na função requisito 9

// Bônus 3

main.removeChild(sectionLeft);