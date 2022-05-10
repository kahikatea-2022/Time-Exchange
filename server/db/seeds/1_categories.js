// seed categories table
exports.seed = async function (knex) {
  await knex('categories').del()
  await knex('categories').insert([
    { id: 1, name: 'Other' },
    { id: 2, name: 'Sport' },
    { id: 3, name: 'Arts and Crafts' },
    { id: 4, name: 'Home Improvement' },
    { id: 5, name: 'Fitness' },
    { id: 6, name: 'Games' },
  ])
}
