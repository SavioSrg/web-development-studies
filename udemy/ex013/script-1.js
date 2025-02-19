const pessoa = {
    nome: 'Sávio', 
    sobrenome: 'Silva',
    idade: 21,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

const {nome, sobrenome, idade} = pessoa;
console.log(nome, sobrenome, idade)