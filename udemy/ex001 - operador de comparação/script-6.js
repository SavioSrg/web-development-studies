// Crie uma função login que valide se o usuário e senha estão corretos.
// Usuário: "savio"
// Senha: "1234"

function login(usuario, senha) {
    const usuarioValido = usuario === 'savio';
    const senhaValida = senha == '1234';

    return usuarioValido && senhaValida ? "Login bem-sucedido" : "Usuário ou senha incorretos";
}

console.log(login('savio', '1234'));     // Login bem-sucedido
console.log(login('savio', '4321'));     // Usuário ou senha incorretos
