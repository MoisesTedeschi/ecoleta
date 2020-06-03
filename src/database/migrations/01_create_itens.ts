import Knex from 'knex';

export async function up(knex: Knex) {
    // Função para criar tabelas.
    return knex.schema.createTable('itens', table => {
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('title').notNullable();
    });
}

export async function down(knex: Knex) {
    // Função para voltar ou "Deletar Tabela Criada".
    return knex.schema.dropTable('itens')
}