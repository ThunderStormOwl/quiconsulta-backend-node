import { SignUpController } from './../controllers/sign-up/SignUpController';
import {Router} from 'express';

const routes = Router();

routes.get('/sign-up', SignUpController.signUp);

export {routes};