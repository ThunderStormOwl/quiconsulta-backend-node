import { TableNames } from './../TableNames';
import {Knex} from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable(TableNames.user, table => {
        table.bigIncrements('id').primary();
        table.string('name').notNullable();
        table.string('username').notNullable();
        table.string('email').notNullable();
        table.string('password').notNullable();
        //example of FK
        //table.bigInteger('address_id').references('id').inTable('address') add if can't be empty .notNullable;
    });
}
export async function down(knex : Knex) {
    return knex.schema.dropTable(TableNames.user);
}