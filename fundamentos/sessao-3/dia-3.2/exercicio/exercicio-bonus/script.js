// // Requisito 1
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for(let index = 1; index < numbers.length; index += 1){
//   for(let secondIndex = 0; secondIndex < index; secondIndex += 1){
//     if(numbers[index] < numbers[secondIndex]){
//       let position = numbers[index];
//       numbers[index] = numbers[secondIndex]
//       numbers[secondIndex] = position;
//     }
//   }
  
// }


// Requisito 2

// for(let index = 1; index < numbers.length; index += 1){
//   for(let secondIndex = 0; secondIndex < index; secondIndex += 1){
//     if(numbers[index] > numbers[secondIndex]){
//       let position = numbers[index];
//       numbers[index] = numbers[secondIndex]
//       numbers[secondIndex] = position;
//     }
//   }
  
// }

// Requisito 3
// let multiply = [];

// for(let index = 0; index < numbers.length; index += 1){
//   if (index < (numbers.length - 1)){
//     multiply.push(numbers[index] * numbers[index + 1]); 
//   } else {
//   multiply.push(numbers[index] * 2);
//   }  
// }
// console.log(multiply)

// Requisito 4
let n = 5;
let aux = "";
for (let linha = 0; linha < n; linha++) {
  for (let coluna = 0; coluna < n; coluna++) {
    aux += "*";
  }
  console.log(aux);
  aux = "";
}