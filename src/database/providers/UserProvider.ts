import { TableNames } from './../TableNames';
import { Knex } from './../connection';

interface IUserToCreate{
    name : string,
    username : string,
    email : string,
    password : string,
}

const createUser = async (user : IUserToCreate) => {
    await Knex(TableNames.user).insert({user})
}

export const UserProvider = {
    createUser,
}