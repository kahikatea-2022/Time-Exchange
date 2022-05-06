const connection = require('./connection')

module.exports = {
  getCategories,
}

function getCategories(db = connection) {
  return db('categories').select()
}
