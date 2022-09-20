/*
7) Escrever um algoritmo que leia um valor para uma variável N de 1 a 10 e calcule a tabuada de 
N. Mostre a tabuada na forma: 0 x N = 0, 1 x N = 1N, 2 x N = 2N, ..., 10 x N = 10N. 
*/

let N = parseInt(prompt('Digite qualquer valor:'));

for(i=0; i <= 10; i++){
    multiplicacao = N*i;
    document.write('', N, 'x', i, '=', multiplicacao, '<br>')
}