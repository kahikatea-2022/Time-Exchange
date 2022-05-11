// Imports
const express = require('express')
const { checkJwt } = require('../auth0')

// db functions
const {
  addUser,
  checkExists,
  getUserByAuth,
  updateUser,
  getUserById,
  updateUserRating,
} = require('../db/users')
const {
  addUserSkills,
  getSkillsByUserId,
  updateUserSkills,
} = require('../db/skills')

// Setup
const router = express.Router()
module.exports = router

//-- ROUTES

// POST /api/v1/user (protected)
router.post('/', checkJwt, async (req, res) => {
  console.log('I AM CALLED!!!')
  try {
    const auth0Id = req.user?.sub
    console.log(auth0Id)
    const user = req.body
    console.log(user)
    const [id] = await addUser({
      auth0Id,
      firstName: user.firstName,
      lastName: user.lastName,
      username: user.username,
      email: user.email,
      about: user.about,
      rating: user.rating,
      region: user.region,
    })
    console.log(id)
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

// PUT /api/v1/user (protected)
router.put('/', checkJwt, async (req, res) => {
  try {
    const auth0Id = req.user?.sub
    const user = req.body
    await updateUser({
      auth0Id,
      firstName: user.firstName,
      lastName: user.lastName,
      username: user.username,
      email: user.email,
      about: user.about,
      rating: user.rating,
      region: user.region,
    })
    const { id } = await getUserByAuth(auth0Id)
    await updateUserSkills(id, user.skills)
    res.sendStatus(201)
  } catch (error) {
    console.log(error)
    res.status(500).json({
      error: {
        title: "Couldn't update user",
      },
    })
  }
})

// GET /api/v1/user (protected)
router.get('/', checkJwt, async (req, res) => {
  try {
    const auth0Id = req.user?.sub
    const user = await getUserByAuth(auth0Id)
    const skills = user ? await getSkillsByUserId(user.id) : []
    res.status(200).json({ ...user, skills })
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
    const { username } = req.query // this might accept other checks (e.g.) email in the future
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

// GET /user/:id
// MAKE SURE THEY're Logged in - checkJwt
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const user = await getUserById(id)
    const skills = user ? await getSkillsByUserId(user.id) : []
    res.status(200).json({
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      username: user.username,
      email: user.email, //maybe we don't want email??
      about: user.about,
      rating: user.rating,
      region: user.region,
      skills,
    }) // do we want to give all info? Or filter before send?
  } catch (error) {
    console.log(error)
    res.status(500).json({
      error: {
        title: "That user couldn't be found.",
      },
    })
  }
})

// PATCH /api/v1/user/:id/rating (protected)
router.patch('/:id/rating', checkJwt, async (req, res) => {
  try {
    const { id } = req.params
    await updateUserRating(id, req.body.rating)
    res.sendStatus(200)
  } catch (error) {
    console.log(error)
    res.status(500).json({
      error: {
        title: "Couldn't update user rating",
      },
    })
  }
})
