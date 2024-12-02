function calcular() {
    document.getElementById('solicitacao_container').style.display = 'none';
    document.getElementById('container').style.display = 'flex';

    // Captura dos elementos de entrada
    let tn1 = document.getElementById('textn1');
    let tn2 = document.getElementById('textn2');

    // Captura dos elementos de saída
    let resSoma = document.getElementById('resultado-soma');
    let resSubtracao = document.getElementById('resultado-subtracao');
    let resMultiplicacao = document.getElementById('resultado-multiplicacao');
    let resDivisao = document.getElementById('resultado-divisao');
    let resResto = document.getElementById('resultado-resto');
    let resPotencia = document.getElementById('resultado-potencia');

    // Captura os elementos da caixa de seleção
    let campSoma = document.getElementById('soma');
    let campSubtracao = document.getElementById('subtracao');
    let campMultiplicacao = document.getElementById('multiplicacao');
    let campDivisao = document.getElementById('divisao');
    let campResto = document.getElementById('resto');
    let campPotencia = document.getElementById('potencia');

    // Conversão dos valores de entrada para números
    const n1 = Number(tn1.value);
    const n2 = Number(tn2.value);

    // Verifica se os números são válidos
    if (isNaN(n1) || isNaN(n2)) {
        alert("Por favor, insira números válidos.");
        return;
    }

    // Atualização dos resultados no HTML
    if (campSoma.checked == true) {
        let calc_soma = n1 + n2;
        resSoma.innerHTML = `Soma: ${calc_soma}`;
        document.getElementById('divSoma').style.display = 'block';
    }

    if (campSubtracao.checked == true) {
        let calc_subtracao = n1 - n2;
        resSubtracao.innerHTML = `Subtração: ${calc_subtracao}`;
        document.getElementById('divSubtracao').style.display = 'block';
    }

    if (campMultiplicacao.checked == true) {
        let calc_multiplicacao = n1 * n2;
        resMultiplicacao.innerHTML = `Multiplicação: ${calc_multiplicacao}`;
        document.getElementById('divMultiplicacao').style.display = 'block';
    }

    if (campDivisao.checked == true) {
        if (n2 === 0) {
            resDivisao.innerHTML = `Divisão: Erro (divisão por zero)`;
        } else {
            let calc_divisao = n1 / n2;
            resDivisao.innerHTML = `Divisão: ${calc_divisao}`;
        }
        document.getElementById('divDivisao').style.display = 'block';
    }

    if (campResto.checked == true) {
        if (n2 === 0) {
            resResto.innerHTML = `Resto: Erro (divisão por zero)`;
        } else {
            let calc_resto = n1 % n2;
            resResto.innerHTML = `Resto: ${calc_resto}`;
        }
        document.getElementById('divResto').style.display = 'block';
    }

    if (campPotencia.checked == true) {
        let calc_potencia = n1 ** n2;
        resPotencia.innerHTML = `Potenciação: ${calc_potencia}`;
        document.getElementById('divPotencia').style.display = 'block';
    }
}

function Reiniciar() {
    location.reload();
}