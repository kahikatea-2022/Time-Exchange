// Imports
const express = require('express')

// db functions
const { getCategories } = require('../db/categories')

// Setup
const router = express.Router()
module.exports = router

//-- ROUTES

// GET /api/v1/categories
router.get('/', async (req, res) => {
  try {
    const categories = await getCategories()
    res.status(200).json({ categories })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      error: {
        title: "Couldn't get categories",
      },
    })
  }
})
