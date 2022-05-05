// create users table
exports.up = async (knex) => {
  return await knex.schema.createTable('users', (table) => {
    table.increments()
    table.string('auth0_id').notNullable()
    table.string('first_name').notNullable()
    table.string('last_name')
    table.string('username').notNullable().unique()
    table.string('email').notNullable().unique()
    table.string('about').notNullable()
    table
      .enu('status', ['active', 'inactive'])
      .notNullable()
      .defaultTo('active')
    table.timestamps(true, true)
  })
}

// rollback users table
exports.down = async (knex) => {
  return await knex.schema.dropTable('users')
}
