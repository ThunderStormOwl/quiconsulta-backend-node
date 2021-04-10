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

interface IUserReadResult{
    id : number,
    name : string,
    username? : string,
    email : string,
    password : string,
}

const readUserByEmail = async (email : string) : Promise<string | IUserReadResult> =>{
    try{
        const user = await Knex(TableNames.user).select('*').where({email}).first();

        if(!user) return 'User does not exist';

        return{
            id: user.id,
            name : user.name,
            email : user.email,
            password : user.password
        }
    }
    catch(error){
        console.log(error);
        return 'Internal error';
    }
}

export const UserProvider = {
    createUser,
    readUserByEmail,
}