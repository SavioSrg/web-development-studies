import express from 'express';
import { config } from 'dotenv';
import path from 'path';
import { randomUUID } from 'crypto';
//deve importar o json server.json

type User = {
    id: string;
    name: string;
    age: number;
}

type CreateUserDTO = Omit<User, "id"> 

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
const url = process.env.API_BASE_URL ?? 'http://localhost';
const port = process.env.API_PORT ?? 3300;
const dbJsonPath = path.resolve(process.cwd(), 'server.json')

const users: User[] = [
    
];

//@ts-ignore
app.get('/api', (request, response) => {
    return response.status(200).send('<h1>Api Base Url</h1>');
})

//@ts-ignore
app.get('/api/users', (request, response) => {
    return response.json(users);
});

//@ts-ignore
app.post('/api/users', (request, response) => {
    const {name, age} : CreateUserDTO = request.body

    if (!name || (age && Number(age) < 0)) {
        const errMessage = 'O usuário a ser criado precisa de nome e idade'
        return response.status(400).send(errMessage)
    }

    const user = { id: randomUUID(), name, age }
    
    users.push(user)

    //writeFileSync(dbJsonPath, JSON.stringify({...dbJson, users}))

    return response.status(201).json(user);
});

//@ts-ignore
app.delete('/api/users/id', (request, response) => {
    const { id } = request.params

    if (!id) {
        const errMessage = 'O usuário a ser deletado precisa de um id'
        return response.status(400).send(errMessage)
    }

    const foundUser = users.find(user => user.id === id)

    if (!foundUser) {
        const errMessage = `O usuário com id ${id} não foi encontrado`
        return response.status(400).send(errMessage)
    }

    const updtedUsers = users.filter(user => user.id !== id)

    //writeFileSync(dbJsonPath, JSON.stringify({...dbJson, users: updatedUsers}))

    return response.status.status(204).json()
}

//@ts-ignore
app.listen(port, () => {
    console.log(`Servidor rodando no endereço ${url}:${port}`);
});
