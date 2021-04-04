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
    connection: {
        host: '',
        user: '',
        password: '',
        database: ''
    }
}


export {development, production}