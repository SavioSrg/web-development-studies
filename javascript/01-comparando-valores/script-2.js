const v = true;
const f = false;

console.log(`Valor correspondente é: ${v} -`, (5 == '5'));    
console.log(`Valor correspondente é: ${f} -`, (5 === '5'));   
console.log(`Valor correspondente é: ${f} -`, (10 != '10'));  
console.log(`Valor correspondente é: ${v} -`, (10 !== '10')); 
console.log(`Valor correspondente é: ${v} -`, (7 > 5));       
console.log(`Valor correspondente é: ${v} -`, (3 <= 3));      
console.log(`Valor correspondente é: ${f} -`, (15 < 10));     
console.log(`Valor correspondente é: ${f} -`, ('a' > 'b'));  