import { Request, Response } from 'express';
import knex from '../database/connections';


class PointsController {
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

        await trx.commit();

        return response.json({ success: true });
    }
}
export default PointsController;