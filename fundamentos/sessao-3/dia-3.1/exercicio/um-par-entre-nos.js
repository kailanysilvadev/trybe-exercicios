//exercicio 8

// let a = 2;
// let b = 4;
// let c = 5;

// if(a % 2 === 0 || b % 2 === 0 || c % 2 === 0){
//   console.log(true);
// } else {
//   console.log(false);
// };

// //exercicio 9

// if(a % 2 === 1 || b % 2 === 1 || c % 2 === 1){
//     console.log(true);
// } else {
//     console.log(false);
// };

// //exercicio 10

// let costOfProducts = 500;
// let saleValue = 1000;
// let profit;

// if(costOfProducts > 0 && saleValue > 0){
//   profit = saleValue - costOfProducts;
// };

// console.log(profit);

//exercicio 11
let grossSalary= 3000;
let inss;
let ir;
let netSalary;
let aInss;
let aIr; 

if(grossSalary <= 1556.94){
  aInss = 0.08;
  inss = aInss * grossSalary
} else if (grossSalary === 1556.95 || grossSalary <= 2594.92){
  aInss = 0.09;
  inss = aInss * grossSalary
  baseSalary = grossSalary
} else if (grossSalary === 2594.93 || grossSalary <= 5189.82){
  aInss = 0.11;
  inss = aInss * grossSalary
} else if (grossSalary > 5189.82){
  aInss = 570.88;
  inss = aInss * grossSalary
}

let baseSalary = grossSalary - inss;

if(baseSalary <= 1903.98){
  ir = 0;
}else if(baseSalary <= 1903.99 || baseSalary <= 2826.65){
  aIr = 0.075;
  ir =(aIr * baseSalary) - 142.80
}else if(baseSalary <= 2826.66 || baseSalary <= 3751.05){
  aIr = 0.15;
  ir = (aIr * baseSalary) - 354.80
}else if(baseSalary <= 3751.06 || baseSalary <= 4664.68){
  aIr = 0.225;
  ir = (aIr * baseSalary) - 636.13
}else if(baseSalary <= 1903.99 || baseSalary <= 2826.65){
  aIr = 0.275;
  ir = (aIr * baseSalary) - 869.36
}

netSalary = baseSalary - ir; 
console.log(netSalary)