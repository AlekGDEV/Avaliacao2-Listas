/*8) Escreva um algoritmo que leia três valores inteiros e diferentes e mostre-os em ordem 
decrescente*/ 

let numero_1 = parseInt(prompt('Digite o primeiro valor'));
let numero_2 = parseInt(prompt('Digite o segundo valor'));
let numero_3 = parseInt(prompt('Digite o terceiro valor'));
let variavel = numero_1;


// Está definido que o numero 1 seria o maior, porém, caso o numero 2 ou 3 sejam maiores, usando uma variavel, é possivel alterar a posição dos elementos.

if(numero_2 > numero_1){
  variavel = numero_2;
  numero_2 = numero_1;
  numero_1 = variavel;
}

if(numero_3 > numero_1){
  variavel = numero_3;
  numero_3 = numero_1;
  numero_1 = variavel;
}

if(numero_3 > numero_2){
  variavel = numero_3;
  numero_3 = numero_2;
  numero_2 = variavel;
}

document.write('A ordem decrescente é: ', +numero_1, +numero_2, +numero_3)