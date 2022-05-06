// Imports
const express = require('express')
const { checkJwt } = require('../auth0')

// db functions
const { addUser, checkExists } = require('../db/users')
const { addUserSkills } = require('../db/skills')

// Setup
const router = express.Router()
module.exports = router

//-- ROUTES

// POST /api/v1/user (protected)
router.post('/', checkJwt, async (req, res) => {
  try {
    const auth0Id = req.user?.sub
    const user = req.body
    const [id] = await addUser({
      auth0Id,
      firstName: user.firstName,
      lastName: user.lastName,
      username: user.username,
      email: user.email,
      about: user.about,
    })
    await addUserSkills(id, user.skills)
    res.status(201).json({ id })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      error: {
        title: "Couldn't add user",
      },
    })
  }
})

// GET /api/v1/user (protected)
router.get('/', checkJwt, async (req, res) => {
  try {
    const auth0Id = req.user?.sub
    res.sendStatus(200)
  } catch (error) {
    console.log(error)
    res.status(500).json({
      error: {
        title: "Couldn't get user",
      },
    })
  }
})

// GET /api/v1/user/check
router.get('/check', async (req, res) => {
  try {
    const { username } = req.body // this might accept other checks (e.g.) email in the future
    const exists = await checkExists('username', username)
    res.status(200).json({ username: exists })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      error: {
        title: 'Failed to run details check',
      },
    })
  }
})
