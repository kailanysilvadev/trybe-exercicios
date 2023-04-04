let student = {}

let adicionaInfo = (objeto, chave, valor) =>{
  objeto[chave] = valor
};

adicionaInfo(student, 'name', 'Kailany');
adicionaInfo(student, 'lastname', 'Silva');

console.log(student['1'])