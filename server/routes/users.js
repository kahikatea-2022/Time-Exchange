// Imports
const express = require('express')
const { checkJwt } = require('../auth0')

// db functions

// Setup
const router = express.Router()
module.exports = router

//-- ROUTES

// GET /api/v1/users (protected)
router.get('/', checkJwt, async (req, res) => {
  try {
    res.sendStatus(200)
  } catch (error) {
    console.log(error)
    res.status(500).json({
      error: {
        title: "Couldn't get users",
      },
    })
  }
})
