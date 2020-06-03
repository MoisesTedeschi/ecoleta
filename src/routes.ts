import express from 'express';


const routes = express.Router();

routes.get('/', (request, response) => {
    //console.log('Listagem de Usuários');
    // Quem determina o nome do parâmetro é quem faz a requisição ("search").
    //const search = String(request.query.search);
    //const filteredUsers = search ? users.filter(user => user.includes(search)) : users;

    // JSON retornado
    return response.json({ message: "Hello, World!" });
});

export default routes;