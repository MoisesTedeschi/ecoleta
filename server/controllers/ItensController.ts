import { Request, Response } from 'express';
import knex from '../database/connections';


class ItensCotroller {
    async index(request: Request, response: Response) {
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
                image_url: `http://192.168.1.86:3333/uploads/${item.image}`,
            };
        });

        return response.json(serializedItens);
    }
}

export default ItensCotroller;