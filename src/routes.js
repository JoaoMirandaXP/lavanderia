const express = require('express');
const routes = express.Router();
const ClientController = require('./controllers/ClientController');
const TaskController = require('./controllers/TaskController');
const SessionController = require('./controllers/SessionController');


//cadastro de cliente
routes.post('/clientes', ClientController.create);
//listagem de clientes
routes.get('/clientes',ClientController.index);
//deletar clientes
routes.delete('/clientes/:id_cliente',ClientController.delete);
//atualizar clientes
routes.put('/clientes/:id_cliente',ClientController.update);

//cadastro de nova tarefa
routes.post('/tarefas',TaskController.create);
//listar novas tarefas
routes.get('/tarefas/',TaskController.index);
//atualizar pedidos
routes.put('/tarefas/:id',TaskController.update);
//deletar tarefas anteriores
routes.delete('/tarefas/:id',TaskController.delete);

routes.post('/session',SessionController.create);



module.exports = routes;