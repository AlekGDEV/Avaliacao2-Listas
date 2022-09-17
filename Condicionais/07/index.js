/*7) Faça um algoritmo que leia uma variável e some 5 caso seja par ou some 8 caso seja ímpar, 
imprimir o resultado desta operação */

let par_impar = parseFloat(prompt('Digite um numero'));
let soma;

if(par_impar%2 == 0){
  soma = par_impar + 8;
  document.write('O numero é par, logo soma com 5. Resultado: ', soma);
}
else if(par_impar%2 == 1){
  soma = par_impar + 8;
  document.write('O numero é impar logo soma com 8. Resultado: ', soma);
}
else{
  document.write('Numero invalido ou não inserido');
}