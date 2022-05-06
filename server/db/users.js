const connection = require('./connection')

// returns user id in array
function addUser(user, db = connection) {
  return db('users').insert({
    auth0_id: user.auth0Id,
    first_name: user.firstName,
    last_name: user.lastName,
    username: user.username,
    email: user.email,
    about: user.about,
  })
}

// returns user id in array
function updateUser(user, db = connection) {
  return db('users').where('auth0_id', user.auth0Id).update({
    auth0_id: user.auth0Id,
    first_name: user.firstName,
    last_name: user.lastName,
    username: user.username,
    email: user.email,
    about: user.about,
  })
}

// sets status to inactive (doesn't actually delete... maybe change?)
function deleteUser(auth0_id, db = connection) {
  return db('users').where('auth0_id', auth0_id).update({
    status: 'inactive',
  })
}

// doesn't include skills
function getUserById(id, db = connection) {
  return db('users')
    .select(
      'id',
      'auth0_id as auth0Id',
      'first_name as firstName',
      'last_name as lastName',
      'username',
      'email',
      'about'
    )
    .where('id', id)
    .first()
}

// doesn't include skills
function getUserByAuth(auth0_id, db = connection) {
  return db('users')
    .select(
      'id',
      'auth0_id as auth0Id',
      'first_name as firstName',
      'last_name as lastName',
      'username',
      'email',
      'about'
    )
    .where('auth0_id', auth0_id)
    .first()
}

// doesn't include skills
function getUsers(db = connection) {
  return db('users')
    .select(
      'id',
      'auth0_id as auth0Id',
      'first_name as firstName',
      'last_name as lastName',
      'username',
      'email',
      'about'
    )
    .where('status', 'active')
}

module.exports = {
  addUser,
  updateUser,
  deleteUser,
  getUserById,
  getUserByAuth,
  getUsers,
}
