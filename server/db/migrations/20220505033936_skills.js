// create skills table
exports.up = async (knex) => {
  return await knex.schema.createTable('skills', (table) => {
    table.increments()
    table.integer('user_id').references('id').inTable('users').index()
    table
      .integer('category_id')
      .references('id')
      .inTable('categories')
      .defaultTo(1)
      .index()
    table.string('skill').notNullable()
    table.enu('role', ['learn', 'teach']).notNullable()
    table.timestamps(true, true)
  })
}

// rollback skills table
exports.down = async (knex) => {
  return await knex.schema.dropTable('skills')
}
