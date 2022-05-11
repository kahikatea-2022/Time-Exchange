// create conversations table
exports.up = async (knex) => {
  return await knex.schema.createTable('conversations', (table) => {
    table.increments()
    table.integer('user_1').references('id').inTable('users').index()
    table.integer('user_2').references('id').inTable('users').index()
  })
}

// rollback conversations table
exports.down = async (knex) => {
  return await knex.schema.dropTable('conversations')
}
