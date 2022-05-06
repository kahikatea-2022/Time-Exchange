const connection = require('./connection')

function addUserSkills(id, skills, db = connection) {
  return db('skills').insert(
    skills.map((skill) => ({
      user_id: id,
      category_id: skill.category,
      skill: skill.skill,
      role: skill.role,
    }))
  )
}

function getSkillsByUserId(id, db = connection) {
  return db('skills')
    .select([
      'skills.id',
      'categories.name as category',
      'skills.skill',
      'skills.role',
    ])
    .join('categories', 'skills.category_id', 'categories.id')
    .where('skills.user_id', id)
}

function getAllSkills(db = connection) {
  return db('skills')
    .select([
      'skills.id',
      'skills.user_id',
      'categories.name as category',
      'skills.skill',
      'skills.role',
    ])
    .join('categories', 'skills.category_id', 'categories.id')
}

module.exports = {
  getSkillsByUserId,
  addUserSkills,
  getAllSkills,
}
