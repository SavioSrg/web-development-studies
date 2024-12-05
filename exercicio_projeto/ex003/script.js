
function calcular(){
    const numero = Number(document.getElementById('texto').value);
    
    let raiz = document.getElementById('raiz')
    let int = document.getElementById('int')
    let nan = document.getElementById('nan')
    let arrBaixo = document.getElementById('arrBaixo')
    let arrCima = document.getElementById('arrCima')
    let dec = document.getElementById('dec')
    
    raiz.innerHTML = `<p>Raiz quadrada: ${Math.hypot(numero)} </p>`
    int.innerHTML = ` <p> ${numero} é inteiro? ${Math.numero}</p>`
    nan.innerHTML = `<p>${numero} é válido? ${numero}</p>`
    arrBaixo.innerHTML = `<p>Arrendondando para baixo: ${numero}</p>`
    arrCima.innerHTML = `<p>Arrendondando para cima: ${numero}</p>`
    dec.innerHTML = `<p>Com duas casas decimais: ${numero}</p>`
    }
    

