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
    // Could these have used the `references('users.id')` syntax?
    table.string('skill').notNullable()
    // Having a 'skill' record with a 'skill' attribute is not ideal,
    // as we see in Results.jsx. Maybe 'name' or 'short_desc' or similar?
    table.enu('role', ['learn', 'teach']).notNullable()
    table.timestamps(true, true)
  })
}

// rollback skills table
exports.down = async (knex) => {
  return await knex.schema.dropTable('skills')
}
