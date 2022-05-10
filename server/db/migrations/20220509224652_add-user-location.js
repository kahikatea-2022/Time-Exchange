// creates location column on users table referencing a location
exports.up = function(knex) {
  return knex.schema.table('users', function (table) {
    table.integer('location').references('id').inTable('regions')
  })
};

exports.down = function(knex) {
  return knex.schema.table('users', function (table) {
    table.dropColumn('location')
  })
};
