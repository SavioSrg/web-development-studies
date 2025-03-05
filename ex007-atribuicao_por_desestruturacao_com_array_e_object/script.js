// let a = 'A';
// let b = 'B';
// let c = 'C';

// const valores = [b, c, a];
// [a, b, c] = valores;

// console.log(a, b, c);

// const numeros = [1156, 2859, 3831, 4465, 5185, 6791, 7157, 8187, 9126];
// const [primeiroNumero, segundoNumero, ...resto] = numeros;
// console.log(primeiroNumero, segundoNumero);
// console.log(resto);

//rest, spread

const numeros = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

const [, [,,seis]] = numeros;
console.log(seis);