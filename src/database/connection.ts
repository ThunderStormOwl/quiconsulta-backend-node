import knex from 'knex';
import {development} from './../knexfile';

export const Knex = knex(development);