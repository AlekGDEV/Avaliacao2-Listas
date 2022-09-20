/*
2) Desenvolver um algoritmo que leia a altura de 15 pessoas. Este programa deverá calcular e 
mostrar : 
a. A menor altura do grupo; 
b. A maior altura do grupo; 
*/

let altura = [1.72, 1.81, 1.90,
  2.00, 1.88, 2.18, 1.66, 1.70,
  1.67, 1.79, 1.57, 1.50];

let altura_lida; 
let maior_altura = 0; 
let menor_altura = 2.5; 

for (let i = 0; i < altura.length; i++) {
let altura_atual = altura[i]; 
  if(altura_atual > altura_lida){ 
    altura_lida = altura_atual;
  } 
  if (altura_atual > maior_altura){  
    maior_altura = altura_atual;
  } 
  if(altura_lida < menor_altura){ 
    menor_altura = altura_lida;
  } 
  else if(altura_atual < menor_altura) 
    menor_altura = altura_atual;
}
document.write('Maior altura: ', maior_altura, '<br>');
document.write('Menor altura: ', menor_altura);