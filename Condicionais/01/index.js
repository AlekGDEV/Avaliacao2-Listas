/*1) Faça um algoritmo que leia os valores A, B, C e imprima na tela se a soma de A + B é menor 
que C. */

let valor_a = parseFloat(prompt('Digite o valor de A'));
let valor_b = parseFloat(prompt('Digite o valor de B'));
let valor_c = parseFloat(prompt('Digite o valor de C'));

let soma = valor_a + valor_b;

if(soma < valor_c){
  document.write('A soma de A e B é menor que C');
}
else{
  document.write('A soma de A e B é maior que C');
}