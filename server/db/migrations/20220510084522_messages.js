// create messages table
exports.up = async (knex) => {
  return await knex.schema.createTable('messages', (table) => {
    table.increments()
    table
      .integer('conversation_id')
      .references('id')
      .inTable('conversations')
      .index()
    table.integer('user_id').references('id').inTable('users').index()
    table.string('uuid').notNullable()
    table.string('message')
  })
}

// rollback messages table
exports.down = async (knex) => {
  return await knex.schema.dropTable('messages')
}
