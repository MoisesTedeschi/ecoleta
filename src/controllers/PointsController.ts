import { Request, Response } from 'express';
import knex from '../database/connections';


class PointsController {
    async show(request: Request, response: Response) {
        const { id } = request.params;

        const point = await knex('points').where('id', id).first();

        if (!point) {
            return response.status(400).json({ message: 'Ponto não encontrado!' });
        }

        /*
        * Retornando todos os itens que estão relacionados com um ponto de coleta.
        *SELECT * FROM itens
        *   JOIN point_itens ON itens.id = point_itens.item_id
        *   WHERE point_itens.point_id = {id}
        */
        const itens = await knex('itens')
            .join('point_itens', 'itens.id', '=', 'point_itens.item_id')
            .where('point_itens.point_id', id)
            .select('itens.title');

        return response.json({ point, itens });
    }

    async create(request: Request, response: Response) {
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

        const point = {
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
        };

        const insertedIds = await trx('points').insert(point);

        const point_id = insertedIds[0];

        const pointItens = itens.map((item_id: number) => {
            return {
                item_id,
                point_id,
            }
        });

        await trx('point_itens').insert(pointItens);

        await trx.commit();

        return response.json({
            id: point_id,
            point,
        });
    }
}
export default PointsController;