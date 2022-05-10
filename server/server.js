// Imports
const express = require('express')
const path = require('path')

// API Routes
const usersRoutes = require('./routes/users')
const userRoutes = require('./routes/user')
const categoryRoutes = require('./routes/categories')
const regionRoutes = require('./routes/regions')

//Setup
const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

// API endpoints
server.use('/api/v1/users', usersRoutes)
server.use('/api/v1/user', userRoutes)
server.use('/api/v1/categories', categoryRoutes)
server.use('/api/v1/regions', regionRoutes)

// React APP endpoint
server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

module.exports = server
