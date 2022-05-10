// creates region column on users table referencing a region
exports.up = function (knex) {
  return knex.schema.table('users', function (table) {
    table.integer('region').references('id').inTable('regions')
  })
}

exports.down = function (knex) {
  return knex.schema.table('users', function (table) {
    table.dropColumn('region')
  })
}
