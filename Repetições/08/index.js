/*
8) Escreva um algoritmo que leia um valor inicial A e uma razão R e imprima uma seqüência em 
P.A. contendo 10 valores. 
*/

let A = parseInt(prompt('Digite o valor desejado:'))
let R = parseInt(prompt('Digite a razão:'))
let novo_A = [];
let pa = A;

document.write('Progressão aritimetica do ', A,' com razão: ', R, '<br>')

for(i = 0; i < 10; i++){
  novo_A[i]= A + R;
  pa += novo_A[i];
  document.write(pa, ' ');
}

