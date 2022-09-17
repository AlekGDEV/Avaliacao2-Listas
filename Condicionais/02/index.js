/*2) Faça um algoritmo que leia o nome, o sexo e o estado civil de uma pessoa. Caso sexo seja “F” e 
estado civil seja “CASADA”, solicitar o tempo de casada (anos). */

let nome = prompt('Digite seu nome:');
let sexo = prompt('Digite seu sexo: (M para masc ou F para fem)');
let estado_civil = prompt('Digite seu estado civil: ');

if (sexo == 'f' && estado_civil == 'casada'){
  tempo_casamento = parseInt(prompt('Digite a duração do seu casamento em anos:'))
  document.write(nome,'<br>');
  document.write(sexo,'<br>');
  document.write(estado_civil,'<br>');
  document.write(tempo_casamento,'<br>');
}


