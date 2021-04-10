import { UserProvider } from './../../database/providers/UserProvider';
import {Request, Response} from 'express';
import {StatusCodes} from 'http-status-codes';
import {celebrate, Joi} from 'celebrate';

const validateSignIn = celebrate({
    body: Joi.object({
        email : Joi.string().email().required(),
        password : Joi.string().min(6).required(),
    }),
})

const signIn = async (req: Request, res: Response) => {
    try {
        const {password, email} = req.body;

        const user =  await UserProvider.readUserByEmail(email);
        
        if(typeof user === 'string'){
            return res.status(StatusCodes.BAD_REQUEST).send(user);
        }

        if(user.password === password){
            return res.status(StatusCodes.OK).json('this is an access token son.');
        }
        else{
            return res.status(StatusCodes.UNAUTHORIZED).send('invalid email or password.');
        }

    }
    catch(error){
        console.log(error);
        return res.status(StatusCodes.BAD_REQUEST).send("Something went wrong =[");
    }
}

export const SignInController = {
    signIn,
    validateSignIn
}