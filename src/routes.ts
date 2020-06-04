import express from 'express';
import knex from './database/connections';

import PointsController from './controllers/PointsController';
import ItensCotroller from './controllers/ItensController';

const routes = express.Router();
const pointsController = new PointsController();
const itensController = new ItensCotroller();

//Padrões da comunidade:
//Index - Listar
//Show - Exibir um único registro
//Create ou Store - Criar novo registro
//Update - Atualizar registro
//Delete ou Destroy - Deletar registro

//Listando itens.
routes.get('/itens', itensController.index);

//Criando um ponto de coleta
routes.post('/points', pointsController.create);

export default routes;