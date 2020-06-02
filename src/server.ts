import express from 'express';


const app = express();

// Rota: Endereço completo da requisição.
// Recurso: Qual entidade estamos acessando do sistema. 

// GET: Buscar uma ou mais informações do back-end.
// POST: Criar uma nova informação no back-end.
// PUT: Atualizar uma informação existente no back-end.
// DELETE: Remover uma informação do back-end.

// Semântica das Rotas 
// POST http://localhost:3333/users = Criar um usuário.
// GET http://localhost:3333/users = Listar usuários.
// GET http://localhost:3333/users/5 = Buscar dados do usuário com ID 5.

app.get('/users', (request, response) => {
    console.log('Listagem de Usuários');

    // JSON retornado
    response.json([
        'Moisés',
        'Nathália',
        'Paula',
        'Paulo',
        'Virginia',
        'Faisca',
        'Rafaela'
    ]);
});

app.listen(3333);
