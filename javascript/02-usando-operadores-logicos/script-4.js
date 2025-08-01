// Uma loja oferece desconto se o cliente for membro VIP ou se a compra for maior que R$ 100. Crie uma função verficarDesconto(membro, valorCompra) para verificar isso.

let cupom = 100;

function verificarDesconto (membro, valorCompra) {
    if (membro === "VIP") {
        const valorComDesconto = valorCompra - cupom;
        return `
        Parabéns por ser um membro VIP!
        Você recebeu um cupom de desconto de R$${cupom} e o novo valor é R$${valorComDesconto}.`;
    } else {
        return `
        Bem vindo a nossa loja!
        O valor da sua comprar é R$${valorCompra}.`
    }
};

console.log(verificarDesconto("Comum", 1000));