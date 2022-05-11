// Imports
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import socket from '../../socket'
import { useParams } from 'react-router-dom'

//Components
import MessageContainer from './MessageContainer'
import Input from './Input'

function Chat() {
  socket.connect()

  const { id: user_2 } = useParams()
  const user = useSelector((state) => state.user)

  const [conversationID, setConversationID] = useState(null)
  const [history, setHistory] = useState(() => [])

  const updateHistory = (update) => {
    setHistory((current) => [...current, update])
    // setHistory([...history, update]) // Why the fuck doesn't this work? It's causing history to be a an empty array??
  }

  useEffect(() => {
    user.id && socket.emit('join_conversation', { user_1: user.id, user_2 })
  }, [user])

  useEffect(() => {
    socket.on('conversation', (setup) => {
      setConversationID(setup.conversationID)
      setHistory([...setup.history])
    })

    socket.on('new_message', (newMessage) => {
      updateHistory(newMessage)
    })

    // not disconnecting the sockets correctly
    return () => socket.emit('close_conversation', conversationID)
  }, [])

  if (!user.id) {
    return (
      <div className="chatArea">
        <p>Login to send messages</p>
      </div>
    )
  }

  return (
    <div className="chatArea">
      <MessageContainer history={history} user={user} />
      <Input user={user} conversationID={conversationID} />
    </div>
  )
}

export default Chat
