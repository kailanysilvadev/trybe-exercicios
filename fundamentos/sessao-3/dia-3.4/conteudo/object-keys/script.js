let student1 = {
  html: 'Muito Bom',
  css: 'Bom',
  javascript: 'Ótimo',
  softskills: 'Ótimo',
};

let student2 = {
  html: 'Bom',
  css: 'Ótimo',
  javascript: 'Ruim',
  softskills: 'Ótimo',
  git: 'Bom', // chave adicionada
}

const listSkill = (student) => {
  let info = Object.keys(student);
  let values = Object.values(student);
  let message = '';
  for(let key in info) {
    message = `${info[key]}, Nível: ${values[key]}`
    console.log(message)
  }
  return message;
  
};

console.log('Estudante 1');
listSkill(student1);

console.log('Estudante 2');
listSkill(student2);



