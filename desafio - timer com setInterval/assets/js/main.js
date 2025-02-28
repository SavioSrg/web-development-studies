function CriaHoraComSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString ('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    })
}

const relogio = document.querySelector ('.relogio');
const iniciar = document.querySelector ('.iniciar');
const pausar = document.querySelector ('.pausar');
const zerar = document.querySelector ('.zerar');
let segundos = 0;
let timer = null;

function atualizaRelogio() {
    relogio.innerHTML = CriaHoraComSegundos(segundos);
}

function iniciaRelogio () {
    timer = setInterval(function () {
        segundos++;
        atualizaRelogio();
    }, 1000)
}

iniciar.addEventListener('click', function(){
    relogio.classList.remove('pausado');
    clearInterval(timer);
    iniciaRelogio();
})
pausar.addEventListener('click', function(){
    clearInterval(timer);
    if (segundos !== 0) relogio.classList.add('pausado');
})
zerar.addEventListener('click', function(e){
    relogio.classList.remove('pausado');
    clearInterval(timer);
    segundos = 0;
    timer = null;
    atualizaRelogio();
})

atualizaRelogio();