const background = document.querySelector('#background-color');
const main = document.querySelector('main');

background.addEventListener('click', (event) => {
  main.style.backgroundColor = event.target.innerText;
  localStorage.setItem('backgroundColor', event.target.innerText);
});

const fontColor = document.querySelector('#font-color');

fontColor.addEventListener('click', (event) => {
  main.style.color = event.target.innerText;
  localStorage.setItem('fontColor', event.target.innerText);
});

const fontSize = document.querySelector('#font-size');

fontSize.addEventListener('click', (event) => {
  main.style.fontSize = event.target.innerText;
  localStorage.setItem('fontSize', event.target.innerText);
});

const lineHeight = document.querySelector('#line-height');

lineHeight.addEventListener('click', (event) => {
  main.style.lineHeight = event.target.innerText;
  localStorage.setItem('lineHeight', event.target.innerText);
});

const fontFamily = document.querySelector('#font-family');

fontFamily.addEventListener('click', (event) => {
  main.style.fontFamily = event.target.innerText;
  localStorage.setItem('fontFamily', event.target.innerText);
});

window.onload = () => {
  main.style.backgroundColor = localStorage.getItem('backgroundColor');
  main.style.color = localStorage.getItem('fontColor');
  main.style.fontSize = localStorage.getItem('fontSize');
  main.style.lineHeight = localStorage.getItem('lineHeight');
  main.style.fontFamily = localStorage.getItem('fontFamily');
}