import { TableNames } from './../TableNames';
import { Knex } from 'knex';

export async function up(knex: Knex) {
    return knex.schema.alterTable(TableNames.user, table =>{
        table.string('username').nullable().alter();
    })
}
export async function down(knex: Knex) {
    return knex.schema.alterTable(TableNames.user, table =>{
        table.string('username').notNullable().alter();
    })
}