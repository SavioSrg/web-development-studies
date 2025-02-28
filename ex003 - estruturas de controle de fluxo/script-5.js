//Crie uma função que receba três números e retorne o maior deles.

console.log(maiorNumero (1, 2, 3));

function maiorNumero (numero1, numero2, numero3) {
    
    return numero1 > numero2 && numero1 > numero3 
    ? numero1 
    : numero2 > numero1 && numero2 > numero3 
    ? numero2 
    : numero3;
}
