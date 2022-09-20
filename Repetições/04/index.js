/*
4) Escrever um algoritmo que leia uma quantidade desconhecida de números e conte quantos deles 
estão nos seguintes intervalos: [0-25], [26-50], [51-75] e [76-100]. A entrada de dados deve 
terminar quando for lido um número negativo.  
*/

let numeros = [1,2,37,35,53,-1,65,78,85];

let intervalo1 = 0;
let intervalo2 = 0;
let intervalo3 = 0;
let intervalo4 = 0;

for(i = 0; i < numeros.length; i++){
  if(numeros[i] >= 0){
    if(numeros[i] >= 0 && numeros[i] <=25 ) {
      intervalo1 += 1;
    }
    else if(numeros[i] >= 26 && numeros[i] <= 50){
      intervalo2 += 1;
    }
    else if(numeros[i] >= 51 && numeros[i] <= 75){
      intervalo3 += 1;
    }
    else if (numeros[i] >= 76 && numeros[i] <= 100)
    {
      intervalo4 += 1;
    }
  }
  else if(numeros[i] < 0){
    break;
  }
} 

document.write('Total de numeros no intervalo de 0 a 25: ', intervalo1, '<br>');
document.write('Total de numeros no intervalo de 26 a 50: ', intervalo2,'<br>');
document.write('Total de numeros no intervalo de 51 a 75: ',intervalo3, '<br>');
document.write('Total de numeros no intervalo de 76 a 100: ',intervalo4, '<br>');