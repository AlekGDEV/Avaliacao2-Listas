/*10) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar 
umaindicação sobre a condição de peso de uma pessoa adulta. A fórmula é IMC = peso / ( altura )2
 
Elabore um algoritmo que leia o peso e a altura de um adulto e mostre sua condição de acordo 
com a tabela abaixo. 
IMC em adultos Condição 
Abaixo de 18,5 Abaixo do peso 
Entre 18,5 e 25 Peso normal 
Entre 25 e 30 Acima do peso 
Acima de 30 obeso */

let altura = parseFloat(prompt('Digite sua altura em centimetros'));
let peso = parseFloat(prompt('Digite seu peso em Kg'));
let altura_metros = (altura/100);
let altura_quadrado = (altura_metros*altura_metros);
let imc = peso / altura_quadrado;

if(imc < 18.5){
  document.write('Abaixo do peso, IMC: ', imc);
}
if(imc >= 18.5 && imc < 25){
  document.write('Peso ideal, IMC: ', imc);
}
if(imc >= 25 && imc < 30){
  document.write('Sobrepeso, IMC: ', imc);
}
if(imc >= 30){
    document.write('Obeso, IMC: ', imc)
}

