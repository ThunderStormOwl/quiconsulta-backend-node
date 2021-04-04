import { TableNames } from './../TableNames';
import { Knex } from './../connection';

interface IUserToCreate{
    name : string,
    username? : string,
    email : string,
    password : string,
}

const createUser = async (userToCreate : IUserToCreate) => {
    try{
        const [insertedUserId] = await Knex(TableNames.user).insert(userToCreate);

        return {
            id: insertedUserId,
            ...userToCreate,

        };
    }
    catch (error){
        return "Error when creating user!";
    }
    
}

export const UserProvider = {
    createUser,
}