// Imports
import React from 'react'

// Components
import MessageBox from './MessageBox'
import MessageStart from './MessageStart'

function MessageContainer({history, user}) {
  return (
    <div className='message-container'>
      {history.length == 0
        ? <MessageStart />
        : history.map(chat => {
          return (
            <MessageBox
              key={chat.uuid}
              username={chat.username}
              message={chat.message}
              position={chat.username === user.username ? 'left' : 'right'}
            />
          )
        })
      }
    </div>
  )
}

export default MessageContainer