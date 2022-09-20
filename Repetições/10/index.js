/*
10) Escreva um algoritmo que leia um valor inicial A e imprima a seqüência de valores do cálculo de 
A! e o seu resultado. Ex: 5! = 5 X 4 X 3 X 2 X 1 = 120 
*/

let valor = parseFloat(prompt('Digite o valor: ')); 
let multiplicacao = 1;

for(let i = valor; i >= 1; i--){
    document.write('Fatorial: ', i);
    multiplicacao = (multiplicacao * i)
};

document.write('Resultado: ', multiplicacao);
