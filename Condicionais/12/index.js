/*12) Escreva um algoritmo que leia o número de identificação, as 3 notas obtidas por um aluno nas 
3 verificações e a média dos exercícios que fazem parte da avaliação, e calcule a média de 
aproveitamento, usando a fórmula: 
MA := (nota1 + nota 2 * 2 + nota 3 * 3 + ME)/7 
A atribuição dos conceitos obedece a tabela abaixo. O algoritmo deve escrever o número do aluno, 
suas notas, a média dos exercícios, a média de aproveitamento, o conceito correspondente e a 
mensagem 'Aprovado' se o conceito for A, B ou C, e 'Reprovado' se o conceito for D ou E. 
Média de aproveitamento Conceito 
>= 90 A 
>= 75 e < 90 B 
>= 60 e < 75 C 
>= 40 e < 60 D 
< 40 E */

let numero_aluno = parseInt(prompt('Digite o numero de identificação do aluno:'))
let nota1 = parseFloat(prompt('Digite a primeira nota:')); 
let nota2 = parseFloat(prompt('Digite a segunda nota:')); 
let nota3 = parseFloat(prompt('Digite a terceira nota:')); 

let ME = (nota1 + nota2 + nota3) / 3;

let MA = (nota1 +(nota2 * 2) + (nota3 * 3) + ME) / 7;

if(MA >= 90){
  conceito = 'A';
  document.write(`Aluno: ${numero_aluno}. <br>`)
  document.write(`Notas: ${nota1}, ${nota2}, ${nota3}. <br>`);
  document.write(`Media dos exercicios: ${ME}. <br>`);
  document.write(`Media de aproveitamento: ${MA} <br>`);
  document.write(`Conceito: ${conceito}. <br>`);
  document.write('Aprovado');
}
else if(MA >= 75 && MA < 90){
  conceito = 'B';
  document.write(`Aluno: ${numero_aluno}. <br>`)
  document.write(`Notas: ${nota1}, ${nota2}, ${nota3}. <br>`);
  document.write(`Media dos exercicios: ${ME}. <br>`);
  document.write(`Media de aproveitamento: ${MA} <br>`);
  document.write(`Conceito: ${conceito}. <br>`);
  document.write('Aprovado');
}
else if(MA >= 60 && MA < 75){
  conceito = 'C';
  document.write(`Aluno: ${numero_aluno}. <br>`)
  document.write(`Notas: ${nota1}, ${nota2}, ${nota3}. <br>`);
  document.write(`Media dos exercicios: ${ME}. <br>`);
  document.write(`Media de aproveitamento: ${MA} <br>`);
  document.write(`Conceito: ${conceito}. <br>`);
  document.write('Aprovado');
}
else if(MA >= 40 && MA < 60){
  conceito = 'D';
  document.write(`Aluno: ${numero_aluno}. <br>`)
  document.write(`Notas: ${nota1}, ${nota2}, ${nota3}. <br>`);
  document.write(`Media dos exercicios: ${ME}. <br>`);
  document.write(`Media de aproveitamento: ${MA} <br>`);
  document.write(`Conceito: ${conceito}. <br>`);
  document.write('Reprovado');
}
else if(MA < 40){
  conceito = 'E';
  document.write(`Aluno: ${numero_aluno}. <br>`)
  document.write(`Notas: ${nota1}, ${nota2}, ${nota3}. <br>`);
  document.write(`Media dos exercicios: ${ME}. <br>`);
  document.write(`Media de aproveitamento: ${MA} <br>`);
  document.write(`Conceito: ${conceito}. <br>`);
  document.write('Reprovado');
}