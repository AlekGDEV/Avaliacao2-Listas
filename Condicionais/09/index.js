/*9) Tendo como dados de entrada a altura e o sexo de uma pessoa, construa um algoritmo que 
calcule seu peso ideal, utilizando as seguintes fórmulas: 
● para homens: (72.7 * h) – 58; 
● para mulheres: (62.1 * h) – 44.7.  */

let altura = parseInt(prompt('Digite sua altura em centimetros: '));
let sexo = prompt('Digite seu sexo: (masculino ou feminino)');
let altura_m = altura / 100

if(sexo == 'masculino'){
  peso_ideal = (72.7 * altura_m) - 58;
  document.write('Seu peso ideal é: ', peso_ideal)

}

if(sexo == 'feminino'){
  peso_ideal = (62.1 * altura_m) - 44.7;
  document.write('Seu peso ideal é: ', peso_ideal)
}