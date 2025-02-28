function podeEntrarNaFesta(idade) {
    return idade < 18 ? 'Não é permitido a entrada' : 'É permitido a entrada';
}

console.log(podeEntrarNaFesta(57));
console.log(podeEntrarNaFesta(16));