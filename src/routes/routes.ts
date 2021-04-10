import { SignUpController, SignInController } from './../controllers/index';
import {Router} from 'express';

const routes = Router();

routes.post('/sign-up', SignUpController.validateSignUp, SignUpController.signUp);
routes.post('/sign-in', SignInController.validateSignIn, SignInController.signIn);

export {routes};