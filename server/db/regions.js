const connection = require('./connection')

module.exports = {
  getRegions,
}

function getRegions(db = connection) {
  return db('regions').select()
}
