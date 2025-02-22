// Crie uma função podeAcessarSistema(usuario, senha) que retorna true se o usuario for "admin" E a senha for "1234". Caso contrário, retorna false.

function podeAcessarSistema(usuario, senha) {
    const verificacao = usuario === "admin" && senha === 1234;
    return verificacao;
}

console.log(podeAcessarSistema('admin', 123246));