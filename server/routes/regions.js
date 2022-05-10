// Imports
const express = require('express')

// db functions
const { getRegions } = require('../db/regions')

// Setup
const router = express.Router()
module.exports = router

//-- ROUTES

// GET /api/v1/regions
router.get('/', async (req, res) => {
  try {
    const regions = await getRegions()
    res.status(200).json({ regions })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      error: {
        title: "Couldn't get regions",
      },
    })
  }
})