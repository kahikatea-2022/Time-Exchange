// Add picture to user
exports.up = function (knex) {
  return knex.schema.alterTable('users', function (table) {
    table.string('picture')
  })
}

// remove picture
exports.down = function (knex) {
  return knex.schema.alterTable('users', function (table) {
    table.dropColumn('picture')
  })
}
