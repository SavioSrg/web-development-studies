const listaDeContatos = ['Paulo', 'Pedro', 'Mateus', 'Laura'];

let encontrouUsuario = false;
let atingiuFimDaLista = false;
let indiceDoUsuario = 0;

while (!encontrouUsuario && !atingiuFimDaLista){
    const usuarioAtual = listaDeContatos[indiceDoUsuario]
    if(usuarioAtual.startsWith('L')){
        encontrouUsuario = true;
        console.log (`Usuário encontrado: ${usuarioAtual}`)
    }if (indiceDoUsuario >= listaDeContatos.length){
        atingiuFimDaLista = true;
        console.log('Usuário não foi encontrado')
    }
    indiceDoUsuario ++
}