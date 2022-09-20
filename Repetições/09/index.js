/*
9) Escreva um algoritmo que leia um valor inicial A e uma razão R e imprima uma seqüência em 
P.G. contendo 10 valores. 
*/

let A = parseInt(prompt('Digite o valor desejado:'))
let R = parseInt(prompt('Digite a razão:'))
let novo_A = [];
let pg = A;

document.write('Progressão geometrica do ', A,' com razão: ', R, '<br>')

for(i = 0; i < 10; i++){
  novo_A[i]= A * R;
  pg *= novo_A[i];
  document.write(pg, ' ');
}