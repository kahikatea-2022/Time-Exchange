// Imports
const express = require('express')
const { checkJwt } = require('../auth0')
const { getAllSkills, getSkillsByRole } = require('../db/skills')
const { getUsers } = require('../db/users')

// db functions

// Setup
const router = express.Router()
module.exports = router

//-- ROUTES

// GET /api/v1/users (protected)
router.get('/', checkJwt, async (req, res) => {
  try {
    const [userArray, skillsArray] = await Promise.all([
      getUsers(),
      getAllSkills(),
    ])
    const users = userArray.map((user) => ({
      ...user,
      skills: skillsByUser(user.id, skillsArray),
    }))
    res.status(200).json({ users })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      error: {
        title: "Couldn't get users",
      },
    })
  }
})
router.get('/learners', checkJwt, async (req, res) => {
  try {
    const [userArray, skillsArray] = await Promise.all([
      getUsers(),
      getSkillsByRole('learn'),
    ])
    const users = userArray
      .map((user) => ({
        ...user,
        skills: skillsByUser(user.id, skillsArray),
      }))
      .filter((user) => user.skills.length !== 0)
    res.status(200).json({ users })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      error: {
        title: "Couldn't get users",
      },
    })
  }
})

router.get('/teachers', checkJwt, async (req, res) => {
  try {
    const [userArray, skillsArray] = await Promise.all([
      getUsers(),
      getSkillsByRole('teach'),
    ])
    const users = userArray
      .map((user) => ({
        ...user,
        skills: skillsByUser(user.id, skillsArray),
      }))
      .filter((user) => user.skills.length !== 0)
    res.status(200).json({ users })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      error: {
        title: "Couldn't get users",
      },
    })
  }
})

function skillsByUser(id, skills) {
  return skills
    .filter((skill) => skill.user_id === id)
    .map((skill) => ({
      id: skill.id,
      category: skill.category,
      skill: skill.skill,
      role: skill.role,
    }))
}
