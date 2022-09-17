/*5) Encontrar o dobro de um número caso ele seja positivo e o seu triplo caso seja negativo, 
imprimindo o resultado.  */

let numero = parseFloat(prompt('Digite um numero: '));
if(numero >= 0){
  dobro = numero*2;
  document.write('O numero é positivo logo será calculado o dobro: ', dobro);
}
else{
  triplo = numero*3;
  document.write('O numero é negativo logo será calculado o triplo: ', triplo);
}