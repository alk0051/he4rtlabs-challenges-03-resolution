import express from 'express';
import { createUserController } from '../Users/controllers/userController';
import bodyParser from 'body-parser';
import getUserService from '../Users/services/getUsersService';
import authenticateUserService from '../Users/services/authenticateUserService';

const routes = express.Router();

routes.use(bodyParser.urlencoded({ extended: true }));
routes.use(bodyParser.json());

routes.post('/createUser', createUserController);
routes.get('/getUsers', (req, res) => {getUserService(req, res)});
routes.post('/login', authenticateUserService);

export default routes;
