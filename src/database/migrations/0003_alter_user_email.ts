import { TableNames } from './../TableNames';
import { Knex } from 'knex';

export async function up(knex: Knex) {
    return knex.schema.alterTable(TableNames.user, table =>{
        table.string('email').notNullable().unique().alter();
    })
}
export async function down(knex: Knex) {
    return knex.schema.alterTable(TableNames.user, table =>{
        table.dropUnique(['email'])
    })
}