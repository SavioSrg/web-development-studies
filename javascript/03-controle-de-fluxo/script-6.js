const pontuacaoUsuario = 999;

const nivelUsuario = pontuacaoUsuario >= 1000 ? "Usuário VIP" : "Usuário normal";

function opcaoIfElse(pontucaoUsuario) {
    if (pontuacaoUsuario >= 1000) {
        console.log('Usuário VIP');
    } else {
        console.log('Usuário normal');
    }
}

console.log(nivelUsuario);
opcaoIfElse(pontuacaoUsuario);