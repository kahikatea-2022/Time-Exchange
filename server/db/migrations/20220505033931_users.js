// create users table
exports.up = async (knex) => {
  return await knex.schema.createTable('users', (table) => {
    table.increments()
    table.string('auth0_id').notNullable().unique()
    table.string('first_name').notNullable()
    table.string('last_name')
    // I actually like that first_name is non-nullable, but last_name is nullable.
    // However, I am curious about how you came to this decision.
    table.string('username').notNullable().unique()
    table.string('email').notNullable()
    table.string('about').notNullable()
    table
      .enu('status', ['active', 'inactive'])
      .notNullable()
      .defaultTo('active')
    // w00t!
    table.timestamps(true, true)
  })
}

// rollback users table
exports.down = async (knex) => {
  return await knex.schema.dropTable('users')
}
