let soma = 0;

for(let numeros = 1; numeros <= 500; numeros++){
    if(numeros%2 == 1){
        if(numeros%3 == 0){
            soma += numeros;

        }
    }
};
document.write('Resultado: ', soma);