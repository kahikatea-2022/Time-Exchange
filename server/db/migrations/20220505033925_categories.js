// create categories table
exports.up = async (knex) => {
  return await knex.schema.createTable('categories', (table) => {
    table.increments()
    table.string('name').notNullable().unique()
  })
}

// rollback categories table
exports.down = async (knex) => {
  return await knex.schema.dropTable('categories')
}
