import { UserProvider } from './../../database/providers/UserProvider';
import {Request, Response} from 'express';
import {StatusCodes} from 'http-status-codes';
import {celebrate, Joi} from 'celebrate';

const validateSignUp = celebrate({
    body: Joi.object({
        email : Joi.string().email().required().max(200),
        password : Joi.string().min(6).required(),
        username: Joi.string().min(3).max(80),
        name: Joi.string().required().min(3).max(100),
    }),
})

const signUp = async (req: Request, res: Response) => {
    try {
        const {name, username = undefined, password, email} = req.body;

        const result =  await UserProvider.createUser({name, username, password, email});
        
        if(typeof result === 'string'){
            return res.status(StatusCodes.BAD_REQUEST).send(result);
        }
        else
            return res.status(StatusCodes.CREATED).json(result);
    }
    catch(error){
        console.log(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Something went wrong =[");
    }
}

export const SignUpController = {
    signUp,
    validateSignUp,
}