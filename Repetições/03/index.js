/*
3) Desenvolver um algoritmo que leia um número não determinado de valores e calcule e escreva a 
média aritmética dos valores lidos, a quantidade de valores positivos, a quantidade de valores 
negativos e o percentual de valores negativos e positivos. 
*/


let numeros = [10, 9, -8, -7,];
let qtd_numeros = numeros.length;
let qtd_positivos = 0;
let qtd_negativos = 0;
let soma = 0;

for (let i = 0; i < qtd_numeros; i++){
    soma += numeros[i]
    if (numeros[i] > 0){
        qtd_positivos++;
    }
    else{
        qtd_negativos++;
    }
};

document.write('Media :', soma/qtd_numeros);
document.write('Positivos: ', qtd_positivos);
document.write('Negativos: ', qtd_negativos);
document.write('Porcentagem de numeros positivos: ', (qtd_positivos/qtd_numeros) * 100);
document.write('Porcentagem de numeros negativos: ', (qtd_negativos/qtd_numeros) * 100);