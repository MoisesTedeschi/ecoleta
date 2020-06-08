import Knex from 'knex';

export async function up(knex: Knex) {
    // Função para criar tabelas.
    return knex.schema.createTable('point_itens', table => {
        table.increments('id').primary();

        table.integer('point_id')
            .notNullable()
            .references('id')
            .inTable('points');

        table.integer('item_id')
            .notNullable()
            .references('id')
            .inTable('itens');
    });
}

export async function down(knex: Knex) {
    // Função para voltar ou "Deletar Tabela Criada".
    return knex.schema.dropTable('point_itens')
}