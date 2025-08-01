import express from 'express';
//import { config } from 'dotenv';
import path from 'path';

// Carregar variáveis de ambiente
//config();

interface IUser {
    name: string;
    age: number;
}

const app = express();

// Servir arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

const url = process.env.API_BASE_URL ?? 'http://localhost';
const port = process.env.API_PORT ? parseInt(process.env.API_PORT) : 3300;

const users: IUser[] = [
    {
        name: 'fulano',
        age: 20,
    },
    {
        name: 'Samuel',
        age: 35,
    },
];

app.get('/api', (request, response) => {
    const homePagePath = path.join(__dirname, 'index.html');
    return response.status(200).sendFile(homePagePath);
});

//app.get('/api/users', (request, response) => {
    //return response.json(users);
//});

// Rota que não retorna nada
//app.get('/api/empty', (request, response) => {
    //return response.status(204).send();
//});

app.listen(port, () => {
    console.log(`Servidor rodando no endereço ${url}:${port}`);
});
