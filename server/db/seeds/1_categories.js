// seed categories table
exports.seed = async function (knex) {
  await knex('categories').del()
  await knex('categories').insert([
    { id: 1, name: 'Other' },
    { id: 2, name: 'Sports, fitness and recreation' },
    { id: 3, name: 'Arts and Crafts' },
    { id: 4, name: 'Home and Garden' },
    { id: 5, name: 'Games and gaming' },
    { id: 6, name: 'Culinary arts' },
    { id: 7, name: 'Music and literature' },
    { id: 8, name: 'Tech and IT' },
    { id: 9, name: 'Languages and culture' },
  ])
}
