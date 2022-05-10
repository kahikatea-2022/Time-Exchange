import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'
import socket from '../../socket'

function Input({user, conversationID}) {
  const [message, setMessage] = useState('')

  const clearMessage = () => {
    setMessage('')
  }
  const handleInput = (e) => {
    setMessage(e.target.value)
  }
  const sendMessage = (e) => {
    e.preventDefault()
    if (!message) return null
    socket.emit("new_message", {userId: user.id, username: user.username, message, uuid: uuid(), conversationID})
    clearMessage()
    // add error handling!!!
  }

  return (
    <form className='messageForm' onSubmit={sendMessage}>
      <textarea  onChange={handleInput} value={message} />
      <button type='submit'>Send</button>
    </form>
  )
}

export default Input