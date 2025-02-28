function calculadora(a, b, operador) {
    switch (operador) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return b!== 0 ? a / b : "Erro: Divisão por zero";
        default:
            return "Operação inválida";
            }
} 

console.log(calculadora(10, 5, "+")); // 15
console.log(calculadora(10, 5, "-")); // 5
console.log(calculadora(10, 5, "*")); // 50
console.log(calculadora(10, 5, "/")); // 2
console.log(calculadora(10, 0, "/")); // Erro: Divisão por zero
console.log(calculadora(10, 5, "%")); // Operação inválida