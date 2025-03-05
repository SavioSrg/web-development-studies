function saoIguais (x, y) {
    const valorIgual = x == y;
    const valorIgualEstrito = x === y;
    const valorDiferente = x != y;
    const valorDiferenteEstrito = x !== y;

    return `
    Comparando os valores ${x} ${typeof x} e ${y} ${typeof y}:
    - São iguais? ${valorIgual}
    - São estritamente iguais? ${valorIgualEstrito}
    - São diferentes? ${valorDiferente}
    - São estritamente diferentes? ${valorDiferenteEstrito}
      `;

};

console.log(saoIguais(5, '5'));
console.log(saoIguais(10, 10));
console.log(saoIguais('JS', 'JS'));