// // Requisito 1

// function imprimeIdade() {
//   for (let idade = 30; idade <= 40; idade += 1) {
//     console.log('Idade dentro do for:', idade)
//   }
// }
// imprimeIdade();

// // Requisito 2

// //   // Executando esse código, recebe-se um erro `TypeError: Assignment to constant variable.`
//   const pessoa = {
//     nome: 'Henri',
//     idade: 20
//   }
//   pessoa['nome'] = 'Luna';
//   pessoa['idade'] = 19;
//  // Altere essa estrutura para corrigir o erro.
//   console.log('Nome:', pessoa.nome);
//   console.log('Idade:', pessoa.idade);

// // Requisito 3

// let favoriteFood = 'Lasanha';
// favoriteFood = 'Hambúrguer';
// console.log(favoriteFood);

// // Requisito 4

// const name = 'Adriana';
// const lastName = 'Soares';
// console.log('Olá' + ',' + name + ' ' + lastName + '!');
// function soma(a,b) {
//   let resultado = a + b;
//   return resultado;
// }
// let a = 3;
// let b = 5;
// console.log(`O resultado da soma de ${a} + ${b} é: ${soma(a,b)}`);

// // Requisito 5

// const numeroAleatorio = () => Math.random()
// console.log(numeroAleatorio());

// // Requisito 6

// const hello = (nome) => `Olá, ${nome}!`
// let nome = 'Ivan';
// console.log(hello(nome));

// // Requisito 7

// const nomeCompleto = (nome, sobrenome) => `${nome} ${sobrenome`
// }
// let nome = 'Ivan';
// let sobrenome = 'Pires';
// console.log(nomeCompleto(nome, sobrenome));

// Requisito 8

let speed = 185;
const speedCar = (speed) => (speed >= 120) ? `Você ultrapassou o limite de velocidade` : `Você está na velocidade permitida`;
console.log(speedCar(speed));