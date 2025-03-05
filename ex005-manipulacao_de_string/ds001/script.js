

function textoEnviado() {
    const nome = document.getElementById('texto').value;

    const imp = document.getElementById('campoTexto');

    imp.innerHTML += `Seu nome é: ${nome}<br>`;
    imp.innerHTML += `Seu nome tem ${nome.length} letras <br>`;
    imp.innerHTML += `A segunda letra do seu nome é: ${nome[1]}<br>`;
    imp.innerHTML += `Qual o primeiro índice da letra LETRA  I no seu nome? ${nome.indexOf('i')}<br>`;
    imp.innerHTML += `Qual o último índice da letra LETRA I no seu nome? ${nome.lastIndexOf('i')}<br>`;
    imp.innerHTML += `As últimas 3 letras do seu nome são: ${nome.slice(-3, nome.length)}<br>`;
    imp.innerHTML += `As palavras do seu nome são: ${nome.split(' ')}<br>`;
    imp.innerHTML += `Seu nome com letras maiúsculas: ${nome.toUpperCase()}<br>`;
    imp.innerHTML += `Seu nome com letras minúsculas: ${nome.toLowerCase()}<br>`;
}
