// seed skills table
exports.seed = async function (knex) {
  await knex('skills').del()
  await knex('skills').insert([
    { id: 1, user_id: 1, category_id: 2, skill: 'Skating', role: 'learn' },
    { id: 2, user_id: 1, category_id: 3, skill: 'Oil painting', role: 'learn' },
    { id: 3, user_id: 1, category_id: 2, skill: 'Soccer', role: 'teach' },
    { id: 4, user_id: 1, category_id: 5, skill: 'Gym', role: 'teach' },
    {
      id: 5,
      user_id: 1,
      category_id: 5,
      skill: 'Long distance running',
      role: 'teach',
    },
  ])
}
