import express from 'express';


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


routes.get('/itens', itensController.index); //Listar vários itens.

routes.get('/points', pointsController.index); //Listar pontos filtrados.
routes.get('/points/:id', pointsController.show); //Listar um ponto específico.
routes.post('/points', pointsController.create); //Criar um ponto de coleta

export default routes;

//Melhorias:
//Usar Service Pattern
//Repository Pattern (Data Mapper)