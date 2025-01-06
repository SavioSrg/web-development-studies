function calcular() {
    const numero = Number(document.getElementById('texto').value);

    let raiz = document.getElementsByClassName('raiz')
    let int = document.getElementsByClassName('int')
    let nan = document.getElementsByClassName('nan')
    let arrBaixo = document.getElementsByClassName('arrBaixo')
    let arrCima = document.getElementsByClassName('arrCima')
    let dec = document.getElementsByClassName('dec')

    raiz[0].innerHTML = `<p>Raiz quadrada: ${numero ** 0.5} </p>`
    int[0].innerHTML = ` <p> ${numero} é inteiro? ${Number.isInteger(numero)} </p>`
    nan.innerHTML = `<p>${numero} é válido? ${Number.isNaN(numero)}</p>`
    arrBaixo[0].innerHTML = `<p>Arrendondando para baixo: ${Math.floor(numero)}</p>`
    arrCima[0].innerHTML = `<p>Arrendondando para cima: ${Math.ceil(numero)}</p>`
    dec[0].innerHTML = `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`
}

