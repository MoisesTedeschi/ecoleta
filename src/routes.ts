import express from 'express';
import knex from './database/connections';


const routes = express.Router();

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
routes.post('/points', async (request, response) => {
    const {
        name,
        email,
        whatsapp,
        latitude,
        longitude,
        number,
        city,
        uf,
        point_reference,
        itens
    } = request.body;

    const trx = await knex.transaction();

    const insertedIds = await trx('points').insert({
        image: 'image-fake',
        name,
        email,
        whatsapp,
        latitude,
        longitude,
        number,
        city,
        uf,
        point_reference
    });

    const point_id = insertedIds[0];

    const pointItens = itens.map((item_id: number) => {
        return {
            item_id,
            point_id,
        }
    });

    await trx('point_itens').insert(pointItens);

    return response.json({ success: true });
});

export default routes;