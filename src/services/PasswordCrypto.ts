import {randomBytes, scrypt} from 'crypto';

export const hashPassword = async (password : string) => {
    const cryptoKey = randomBytes(16).toString('hex');

    return new Promise<string>((resolve, reject) => {
        scrypt(password, cryptoKey, 64, (err, hashedPassword) =>{
            if(err) reject(err);

            resolve(cryptoKey + ':' + hashedPassword.toString('hex'));
        });
    });
}

export const verifyPassword = async (password : string, hashedPasswordWithKey : string) => {

    return new Promise((resolve, reject) => {
        const [cryptoKey, hashedPassword] = hashedPasswordWithKey.split(':');

        scrypt(password, cryptoKey, 64, (err, newHashedPassword) =>{
            if(err) reject(err);

            resolve(hashedPassword === newHashedPassword.toString('hex'));
        });
    });
}