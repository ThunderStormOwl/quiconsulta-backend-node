import { TableNames } from './../../database/TableNames';
import { Knex } from './../../database/connection';
import {Request, Response} from 'express';

const signUp = async (req: Request, res: Response) => {
    return res.send("here dude");
}

export const SignUpController = {
    signUp,
}