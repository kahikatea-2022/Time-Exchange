// seed categories table
exports.seed = async function (knex) {
  await knex('users').del()
  await knex('users').insert([
    {
      id: 1,
      auth0_id: 'auth0|62734d140b600f00693e3f50',
      first_name: 'Test',
      last_name: 'User',
      username: 'testUser01',
      email: 'testemail@test.com',
      about: 'This is my test user account. Cool!',
    },
  ])
}
