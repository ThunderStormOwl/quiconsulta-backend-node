import {Request, Response} from 'express';

const signUp = (req: Request, res: Response) => {
    return res.send("Here dog!")
}

export const SignUpController = {
    signUp,
}