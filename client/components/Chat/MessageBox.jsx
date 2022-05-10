// Imports
import React from 'react'

function MessageBox({message, username, position = 'right'}) { //key
  return (
    <div className={`message message-${position}`}>
      <p className='message-body'>{message}</p>
      <p className='message-username'>{username}</p>
    </div>
  )
}

export default MessageBox