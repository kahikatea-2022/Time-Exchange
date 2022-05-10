// // seed categories table
exports.seed = async function (knex) {
  await knex('messages').del()
  await knex('messages').insert([
    {
      id: 1,
      conversation_id: 1,
      user_id: 1,
      message: 'Hey!',
      uuid: '001',
    },
  ])
}
