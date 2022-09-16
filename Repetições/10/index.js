let valor = parseFloat(prompt('Digite o valor: ')); 
let multiplicacao = 1;

for(let n = valor; n >= 1; n--){
    document.write('Fatorial: ', n);
    multiplicacao = (multiplicacao * n)
}
document.write('Resultado: ', multiplicacao);
