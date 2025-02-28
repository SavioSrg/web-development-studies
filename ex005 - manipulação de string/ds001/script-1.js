let texto = " Eu estudo JavaScript"
let texto_teste = "Eu gosto de JavaScript e JavaScript é ótimo! JavaScript";

// Quant. de caracteres 
console.log(texto.length)

// Retorna a posição da primeira ocorrência de um caractere ou substring dentro da string
console.log(texto.indexOf("JavaScript"));
console.log(texto.indexOf("Python")); // -1 (não encontrado)

// Retorna a posição da última ocorrência de um caractere ou substring
console.log(texto.lastIndexOf("JavaScript"));

// Pesquisa uma string usando uma expressão regular e retorna um array com os resultados encontrados
console.log(texto_teste.match(/JavaScript/g));

// Procura uma string usando uma expressão regular e retorna a posição da primeira ocorrência
console.log(texto_teste.search("gosto"));
console.log(texto_teste.search(/JavaScript/));

// Substitui um valor dentro da string
console.log(texto.replace("JavaScript", "Python"));

// Usando expressão regular para substituir todas as ocorrências
console.log(texto_teste.replace(/JavaScript/g, "Python"));

// Extrai parte de uma string, sem modificar a original
console.log(texto.slice(0, 4));
console.log(texto.slice(-6));

//É similar ao slice(), mas não aceita valores negativos.
console.log(texto.substring(0, 4));
console.log(texto.substring(4, 0));

// Divide a string em um array com base em um delimitador
console.log(texto_teste.split(" ")); 

// Separando cada letra
console.log(texto_teste.split(""));

// Transforma todos os caracteres da string para maiúsculas
console.log(texto.toUpperCase());

// Transforma todos os caracteres da string para minúsculas
console.log(texto.toLowerCase());