// create regions table
exports.up = async (knex) => {
  return await knex.schema.createTable('regions', (table) => {
    table.increments()
    table.string('region').notNullable().unique()
  })
}

// rollback regions table
exports.down = async (knex) => {
  return await knex.schema.dropTable('regions')
}
