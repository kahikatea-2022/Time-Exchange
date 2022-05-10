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

function getSkillsByRole(role, db = connection) {
  return db('skills')
    .select([
      'skills.id',
      'skills.user_id',
      'categories.name as category',
      'skills.skill',
      'skills.role',
    ])
    .join('categories', 'skills.category_id', 'categories.id')
    .where('skills.role', role)
}

async function updateUserSkills(id, skills) {
  try {
    await deleteUsersSkills(id)
    return addUserSkills(id, skills)
  } catch (error) {
    return Promise.reject(error)
  }
}

function deleteUsersSkills(id, db = connection) {
  return db('skills').where('user_id', id).del()
}

module.exports = {
  getSkillsByUserId,
  addUserSkills,
  getAllSkills,
  getSkillsByRole,
  deleteUsersSkills,
  updateUserSkills,
}
