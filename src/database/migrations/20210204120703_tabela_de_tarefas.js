
exports.up = function(knex) {
    return knex.schema.createTable('tarefas', function(table){
      table.increments();
      table.string('descricao');
      table.date('entrada');
      table.date('saida');
      table.boolean('done');
      //relacionamento
      table.string('id_cliente');
      table.foreign('id_cliente').references('id').inTable('clientes');
  
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('tarefas');
  };
  