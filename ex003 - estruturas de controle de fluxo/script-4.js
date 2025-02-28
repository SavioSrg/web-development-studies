// Escreva uma função que receba a idade de uma pessoa e retorne:
// "Criança" se for menor que 12 anos.
// "Adolescente" se estiver entre 12 e 17 anos.
// "Adulto" se estiver entre 18 e 59 anos.
// "Idoso" se tiver 60 anos ou mais.

function classificarIdade (idade) {
    if (idade < 12) return "Idade correspondente a Criança";
    if (idade > 12 && idade <= 17) return "Idade correspondente a Adolescente";
    if (idade > 17 && idade <= 59) return "Idade correspondente a Adulto";
    if (idade > 59) return "Idade correspondente a Idoso";
}

console.log(classificarIdade(11))
console.log(classificarIdade(15))
console.log(classificarIdade(21))
console.log(classificarIdade(60))