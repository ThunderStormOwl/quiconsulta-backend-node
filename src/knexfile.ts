import { Knex } from 'knex';
import path from 'path';

const development = {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: path.resolve(__dirname, '..', 'database.sqlite'),
    migrations: {
        directory: path.resolve(__dirname, 'database', 'migrations')
    }
}

const production = {
    client: 'pg',
    migrations: {
        directory: path.resolve(__dirname, 'database', 'migrations')
    },
    connection: {
        port: Number(process.env.DATABASE_PORT || 5432),
        host: process.env.DATABASE_HOST,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        ssl: process.env.DATABASE_SSL ? 
            {rejectUnauthorized : process.env.DATABASE_SSL_REJECT_UNAUTHORIZED === 'false' ? false: true} 
            : undefined,
    }
}


export {development, production}