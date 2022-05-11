const connection = require('./connection')

module.exports = {
  getConversationById,
  getConversationByUsers,
  newConversation,
  getConversationId,
}

function getConversationById(id, db = connection) {
  return db('conversations').select().where('id', id).first()
}

// potential issue when user starts conversation with themselves...
// will create a new entry each time
function getConversationByUsers(user1, user2, db = connection) {
  return db('conversations')
    .select()
    .whereIn('user_1', [user1, user2])
    .whereIn('user_2', [user1, user2])
    .whereNot('user_1', db.ref('user_2'))
    .first()
}

function newConversation(user_1, user_2, db = connection) {
  return db('conversations').insert({ user_1, user_2 }) //
}

async function getConversationId(user_1, user_2) {
  try {
    const conversation = await getConversationByUsers(user_1, user_2)
    return conversation?.id || (await newConversation(user_1, user_2))
  } catch (err) {
    console.log(err)
    return err
  }
}
