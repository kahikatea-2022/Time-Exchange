// seed categories table
exports.seed = async function (knex) {
  await knex('conversations').del()
  await knex('conversations').insert([
    {
      id: 1,
      user_1: 1,
      user_2: 2,
    },
  ])
}
