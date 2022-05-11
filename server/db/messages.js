const connection = require('./connection')

module.exports = {
  getMessagesByConversation,
  addMessage,
  // addAndGet,
}

function getMessagesByConversation(conversationId, db = connection) {
  return db('messages')
    .select(['messages.*', 'users.username'])
    .where('messages.conversation_id', conversationId)
    .join('users', 'messages.user_id', 'users.id')
}

function addMessage(
  { conversation_id, user_id, message, uuid },
  db = connection
) {
  return db('messages').insert({ conversation_id, user_id, message, uuid })
}
