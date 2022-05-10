// Imports
const express = require('express')
const socketIo = require('socket.io')
const http = require('http')
const path = require('path')

// db functions
const { getConversationId } = require('./db/conversations')
const { getMessagesByConversation, addMessage } = require('./db/messages')

// API Routes
const usersRoutes = require('./routes/users')
const userRoutes = require('./routes/user')
const categoryRoutes = require('./routes/categories')
const regionRoutes = require('./routes/regions')

//Setup
const app = express()
const server = http.createServer(app)
const io = socketIo(server)

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

// API endpoints
server.use('/api/v1/users', usersRoutes)
server.use('/api/v1/user', userRoutes)
server.use('/api/v1/categories', categoryRoutes)
server.use('/api/v1/regions', regionRoutes)

//Socket events
io.on('connection', (socket) => {
  socket.on('join_conversation', async ({ user_1, user_2 }) => {
    const conversationID = await getConversationId(user_1, user_2)
    const history = await getMessagesByConversation(conversationID)
    socket.join(conversationID)
    socket.emit('conversation', { conversationID, history })
    // add try catch!!! with error emitter
  })

  socket.on('new_message', async (message) => {
    try {
      await addMessage({
        conversation_id: message.conversationID,
        user_id: message.userId,
        message: message.message,
        uuid: message.uuid,
      })
      io.to(message.conversationID).emit('new_message', message)
    } catch (error) {
      console.log(error)
      // emit error message
    }
  })

  socket.on('close_conversation', (conversationID) => {
    socket.leave(conversationID)
  })

  socket.on('disconnect', () => {
    console.log('disconnected')
  })
})

// React APP endpoint
server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

module.exports = server
