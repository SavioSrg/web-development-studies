const listaDeNumeros = [33, 131, 155, 264, 159, 1579, 1354, -95]

//código imperativo
console.log("Print via for imperativo \n")
for (let contador = 0; contador < listaDeNumeros.length; contador++){
	console.log(listaDeNumeros[contador])
}

//código declarativo
console.log("Print via for declarativo \n")
for (const numero of listaDeNumeros){
    console.log(numero)
}

//Se fosse um while
console.log("Print via While \n")
let indiceDoNumero = 0;
while (indiceDoNumero < listaDeNumeros.length){
    console.log(listaDeNumeros[indiceDoNumero])
    indiceDoNumero++
}
