/*
import fastify from 'fastify';
import { AppFactory } from './shared/utils/AppFactory';

const app = fastify();
app.use(fastify.json());

const { userController } = AppFactory.create();

// Rotas usando o adapter
app.post('/users', (req, res) => userController.createUser(req, res));
app.get('/users/:id', (req, res) => userController.getUser(req, res));

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
*/
