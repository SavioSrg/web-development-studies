const usuarios = new Array();
const data = new Date();
const horas = data.getHours();

// Receber dados do formulário
document.getElementById('formulario').addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;
    const idade = document.getElementById('idade').value;
    const email = document.getElementById('email').value;
    const hobbiesInicial = document.getElementById('hobbies').value;

    const hobbies = organizarHobbies(hobbiesInicial);

    const novoUsuario = { nome, sobrenome, idade, email, hobbies };
     usuarios.push(novoUsuario);

     console.log(horas);

    const textoPronto = `${periodoDia(horas)}<br>Olá ${nome}, seja bem-vindo(a)!<br>
    Seu sobrenome é ${sobrenome}, você tem ${idade} anos, 
    seu email é ${email} e seus hobbies são: ${hobbies.join(", ")}.`;

    const campo_texto = document.getElementById('text');
    campo_texto.innerHTML = textoPronto;

});

function organizarHobbies(hobbies) {
    const hobbiesArray = hobbies.split(",").map(hobby => hobby.trim());
    return hobbiesArray;
}

function periodoDia(horas) {
    let horarioAtual;
    if (horas >= 5 && horas < 12) {
        horarioAtual = 'Bom dia!';
    } else if (horas >= 12 && horas < 18) {
        horarioAtual = 'Boa tarde!';
    } else if (horas >= 18 || horas < 5) {
        horarioAtual = 'Boa noite!';
    } else {
        horarioAtual = 'ERRO';
    }
    return horarioAtual;
}

