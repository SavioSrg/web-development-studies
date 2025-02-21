// Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem (number).
// Retorne true se a imagem estiver no modo paisagem.

function ePaisagem (largura, altura) {
    return largura > altura ? true : false;
}


const ePaisagem = (largura, altura) => largura > altura;