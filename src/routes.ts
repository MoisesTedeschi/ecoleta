import express from 'express';
import knex from './database/connections';

import PointsController from './controllers/PointsController';

const routes = express.Router();
const pointsController = new PointsController();

routes.get('/itens', async (request, response) => {
    //console.log('Listagem de Usuários');
    // Quem determina o nome do parâmetro é quem faz a requisição ("search").
    //const search = String(request.query.search);
    //const filteredUsers = search ? users.filter(user => user.includes(search)) : users;

    // JSON retornado

    const itens = await knex('itens').select('*'); // Mesma coisa que: SELECT * FROM itens

    const serializedItens = itens.map(item => {
        //O map vai percorrer todos os itens recebidos do BD
        //e posso modificar como quiser.
        return {
            id: item.id,
            title: item.title,
            image_url: `http://localhost:3333/uploads/${item.image}`,
        };
    });

    return response.json(serializedItens);
});

//Criando um ponto de coleta
routes.post('/points', pointsController.create);

export default routes;