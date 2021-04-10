import { SignUpController, SignInController } from './../controllers/index';
import {Router} from 'express';

const routes = Router();

routes.post('/sign-up', SignUpController.signUp);
routes.post('/sign-in', SignInController.validateSignIn, SignInController.signIn);

export {routes};