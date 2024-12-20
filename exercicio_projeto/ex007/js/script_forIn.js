const animal = {
    especie: 'Canis Lupus',
    habitat: 'Florestas dos EUA',
    expectativaDeVida: 20,
    ehTerrestre: true
}

console.log(animal)

animal.populacao = 1000;
console.log(animal.populacao)

// Temos uma base de usuários e eles tem dados como o nome e e-mail que estão fora da formatação esperada. queremos fazer uma rotina que padronize estes dados.

//for-in
const user = {
    name: 'alison JoSÉ mAria SouZA',
    email: 'JOSE.M1@gmail.com',
    age: 23,
    address: 'X street'
}

for (const key in user){
    if (key === 'name'){
        const names = user[key].split(' ')
        user[key] = ''

        for (const name of names){
            const normalizedName = name.toLowerCase()
            const [primeiraLetra, ...restoDoNome] = normalizedName
            
            user[key] = user[key] + ' ' +primeiraLetra.toUpperCase() + restoDoNome.join('')
            user[key] = user[key].trim()
        }
    }
    if (key === 'email'){
        user[key] = user[key].toLowerCase()    
    }
}

console.log(user)