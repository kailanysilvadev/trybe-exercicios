let a = 8;
let b = 5;
let c = 10;
//exercicio 2

if(a > b){
  console.log(`O número ${a}-(a) é maior que o número ${b}-(b)`)
}else if(b > a){
  console.log(`O número ${b} é maior que o número ${a}`)
}else{
  console.log('Os números são iguais')
}

//exercicio 3

if(a > b && a > c){
  console.log(`o número ${a}-(a) é o maior`);
}else if(b > a && b > c){
  console.log(`o número ${b}-(b) é o maior`)
}else if(c > a && c > b){
  console.log(`o número ${c}-(c) é o maior`)
}