import express, { response } from 'express';


const app = express();

app.use(express.json());

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

// Resquest Param: Parâmetros que vem na própria rota que identificam um recurso.
// Utilizado quando se quer buscar, atualizar e/ou deletar um único usuário.
// A rota não "sobrevive" sem esse tipo de parâmetro. Ou seja, é necessário para o
// funcionamento da rota e quase que obrigatórios.

// Query Param: Parâmetros que vem na própria rota e, geralmente, opcionais. Ou seja,
// utilizados para filtros, buscas e paginação. Geralmente, eles são parâmetros não
// obrigatórios para as rotas, mas influenciam no resultado dela.

// Request Body: Parâmetros para criação e atualização de informações.

const users = [
    'Moisés', // 0
    'Nathália', // 1
    'Paula', //2
    'Paulo', // 3
    'Virginia', // 4
    'Faisca', // 5
    'Rafaela' // 6
]

app.get('/users', (request, response) => {
    //console.log('Listagem de Usuários');
    // Quem determina o nome do parâmetro é quem faz a requisição ("search").
    const search = String(request.query.search);

    const filteredUsers = search ? users.filter(user => user.includes(search)) : users;

    // JSON retornado
    return response.json(filteredUsers);
});

app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id);

    const user = users[id];

    return response.json(user);
});

app.post('/users', (request, response) => {
    const data = request.body;

    const user = {
        name: data.name,
        email: data.email
    };

    return response.json(user);
});

app.listen(3333);
