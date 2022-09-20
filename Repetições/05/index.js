/*
5) Faça um algoritmo estruturado que leia uma quantidade não determinada de números positivos. 
Calcule a quantidade de números pares e ímpares, a média de valores pares e a média geral dos 
números lidos. O número que encerrará a leitura será zero. 
*/

let numeros = [1,2,3,4,5,6,7];
let qtd_par = 0;
let qtd_impar = 0;
let soma_par = 0;
let numeros_lidos = 0;

for(i=0; i < numeros.length; i++){
  if(numeros[i] === 0){
    break;
  } 
  if(numeros[i] % 2 == 0){
    qtd_par++;
    soma_par += numeros[i];
  } 
  else{
    qtd_impar++;
  }
  numeros_lidos += numeros[i];
}

let media_par = soma_par/qtd_par;
let media_lidos = numeros_lidos/numeros.length;
document.write('A quantidade de numeros pares é: ', qtd_par, '<br>');
document.write('A quantidade de numeros impares é: ', qtd_impar, '<br>');
document.write('A media dos numeros pares é: ', media_par, '<br>');
document.write('A media geral é: ', media_lidos)