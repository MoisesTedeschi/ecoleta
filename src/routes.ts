import express from 'express';
import { celebrate, Joi } from 'celebrate';

import multer from 'multer';
import multerConfig from './config/multer';

import PointsController from './controllers/PointsController';
import ItensCotroller from './controllers/ItensController';

const routes = express.Router();
const upload = multer(multerConfig);

const pointsController = new PointsController();
const itensController = new ItensCotroller();

//Padrões da comunidade:
//Index - Listar
//Show - Exibir um único registro
//Create ou Store - Criar novo registro
//Update - Atualizar registro
//Delete ou Destroy - Deletar registro


routes.get('/itens', itensController.index); //Listar vários itens.

routes.get('/points', pointsController.index); //Listar pontos filtrados.
routes.get('/points/:id', pointsController.show); //Listar um ponto específico.


routes.post(
    '/points',
    upload.single('image'),
    celebrate({
        body: Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string().required().email(),
            whatsapp: Joi.string().required(),

            latitude: Joi.number().required(),
            longitude: Joi.number().required(),

            number: Joi.string().required(),
            city: Joi.string().required(),
            uf: Joi.string().required().max(2),
            itens: Joi.string().required(),
            point_reference: Joi.string(),
        })
    }, {
        abortEarly: false
    }),
    pointsController.create); //Criar um ponto de coleta

export default routes;

//Melhorias:
//Usar Service Pattern
//Repository Pattern (Data Mapper)