/*11) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço 
normal deetiqueta e a escolha da condição de pagamento. Utilize os códigos da tabela a seguir 
para ler qual acondição de pagamento escolhida e efetuar o cálculo adequado. 
Código Condição de pagamento 
1 À vista em dinheiro ou cheque, recebe 10% de desconto 
2 À vista no cartão de crédito, recebe 15% de desconto 
3 Em duas vezes, preço normal de etiqueta sem juros 
4 Em duas vezes, preço normal de etiqueta mais juros de 10%
*/
let produto = 40;

let desconto_10 = (produto * 10) / 100;
let desconto_15 = (produto * 15) / 100;

let preco_parcelado = produto / 2; 
let juros = (produto * 10) / 100;

let forma_pagamento = parseInt(prompt('Digite o numero da forma de pagamento de 1 a 4'))

if(forma_pagamento == 1){
  pagamento_avista = produto - desconto_10;
  document.write('Pagamento a vista no dinheiro 10% de desconto. Valor: ', pagamento_avista)
}
else if(forma_pagamento == 2){
  pagamento_avista = produto - desconto_15;
  document.write('Pagamento a vista no dinheiro 15% de desconto. Valor: ', pagamento_avista)
}
else if(forma_pagamento == 3){
  pagamento_parcelado = preco_parcelado * 2;
  document.write('Pagamento de duas vezes, preço normal sem juros. Valor: ', pagamento_parcelado)
}
else if(forma_pagamento == 4){
  pagamento_parcelado = (preco_parcelado * 2) + juros;
  document.write('Pagamento de duas vezes, 10% juros. Valor: ', pagamento_parcelado)
}
else{
  document.write('Opção invalida')
}