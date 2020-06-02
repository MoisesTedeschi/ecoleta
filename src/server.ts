import express from 'express';


const app = express();

app.get('/users', (request, response) => {
    console.log('Listagem de Usuários');

    response.json([
        'Moisés',
        'Nathália',
        'Paula',
        'Paulo',
        'Virginia',
        'Faisca',
        'Rafaela'
    ]);
});

app.listen(3333);
