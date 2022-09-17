/*3) Faça um algoritmo para receber um número qualquer e informar na tela se é par ou ímpar.  */

let par_impar = parseFloat(prompt('Insira um numero: '));

if(par_impar%2 == 0 ){
  document.write('O numero é par');
}
else if(par_impar%2 == 1){
  document.write('O numero é impar');
}
else{
  document.write('Numero invalido ou não inserido');
}