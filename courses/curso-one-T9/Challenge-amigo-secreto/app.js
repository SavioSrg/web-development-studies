let amigos = [];

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome =input.value.trim(); //trim() remove espaços extras

    // Validação
    if (nome === "") {
        alert("Por favor, insira um nome.");
    }

    amigos.push(nome); // Adiciona ao array
    atualizarLista();  // Atualiza a lista
    input.value = "";  // Limpa o campo
}
