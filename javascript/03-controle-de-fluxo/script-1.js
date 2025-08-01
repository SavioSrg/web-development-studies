// if: Executa um bloco de código se a condição for verdadeira.
// if-else: Executa um bloco de código se a condição for verdadeira e outro bloco se for falsa.
// else: Executa um bloco de código se todas as condições anteriores (if e else if) forem falsas.
// Operador ternário (condição ? expressão1 : expressão2): Forma simplificada do if-else para expressões curtas.
// switch: Executa diferentes blocos de código com base em múltiplos valores possíveis de uma variável ou expressão.

// Escreva uma função que receba um número e:
// Retorne "Positivo" se for maior que zero.
// Retorne "Negativo" se for menor que zero.
// Retorne "Zero" se for igual a zero.

function verificarNumero (numero) {
    return numero === 0 ? "Zero" : numero < 0 ? "Negativo" : "Positivo";
}

console.log(verificarNumero (0));
console.log(verificarNumero (1));
console.log(verificarNumero(-9));