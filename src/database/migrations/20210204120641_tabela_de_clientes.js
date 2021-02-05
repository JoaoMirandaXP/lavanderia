
exports.up = function(knex) {
    return knex.schema.createTable('clientes', function(table){
      table.string('id').primary().notNullable();
      table.string('name');
      table.string('telefone');
      table.string('endereco');
      //relacionamento
      table.string('servicos');
      table.foreign('servicos').references('descricao').inTable('tarefas')
  
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('clientes');
  };
  