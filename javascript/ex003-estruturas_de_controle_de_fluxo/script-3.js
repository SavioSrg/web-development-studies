// Crie uma função que receba um número e retorne:
// "Par" se o número for par.
// "Ímpar" se for ímpar.

function ImparPar (numero) {
    return numero % 2 !== 0 ? "Impar" : "Par";
}

console.log(ImparPar (5));
console.log(ImparPar (1002));