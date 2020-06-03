import express, { response } from 'express';
import path from 'path';
import routes from './routes';


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
const app = express();

app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.listen(3333);
