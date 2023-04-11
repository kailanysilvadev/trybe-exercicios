const urgente = document.getElementsByClassName('emergency-tasks')[0];
const titleUrgente = document.querySelectorAll('.emergency-tasks h3');
const naoUrgente = document.getElementsByClassName('no-emergency-tasks')[0];
const titleNaoUrgente = document.querySelectorAll('.no-emergency-tasks h3');

urgente.style.backgroundColor = 'pink';
naoUrgente.style.backgroundColor = 'yellow';

for (let index = 0; index < titleUrgente.length; index += 1) {
  titleUrgente[index].style.backgroundColor = 'purple';
  titleNaoUrgente[index].style.backgroundColor = 'black';
};
