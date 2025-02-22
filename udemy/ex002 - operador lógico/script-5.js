// Validação de formulário:
// Crie uma função formularioValido(nome, email, idade) que retorna true se:

// nome não for vazio
// email conter "@"
// idade for maior ou igual a 18

function formularioValido(nome, email, idade) {
    if (!nome) {
        return 'Nome do Usuário não identificado';
    }
    if (!email.includes("@")) {
        return 'Email inválido, o email deve conter "@"';
    }
    if(idade < 18) {
        return 'Idade não permitida';
    }
    return true;
}

console.log(formularioValido("Sávio", "teste@gmail.com", 18))