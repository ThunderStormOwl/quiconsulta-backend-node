import knex from 'knex';
import {development, production} from './../knexfile';

export const Knex = knex(process.env.NODE_ENV === 'production' ? production : development);