
function perguntarHora(hora) {
    if (hora >= 0 && hora < 12) {
        console.log('Bom dia!');
    } else if (hora >= 12 && hora < 18) {
        console.log('Boa tarde!');
    } else if (hora >= 18 && hora < 24) {
        console.log('Boa noite');
    } else {
        console.log('ERRO');
    }
}

perguntarHora(12);

function descobrirNumero(numero){
    if (numero >= 0 && numero <= 5){
        console.log('O número está entre 0 e 5.');
    }else if(numero >= 6 && numero <= 8){
        console.log('O número não está entre 6 e 8.');
    } else if(numero >= 9 && numero <=10){
        console.log('O número não está entre 9 e 10.');
    } else{
        console.log('O número é maior que 10');
    }
}

descobrirNumero(99);