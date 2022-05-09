import React from 'react'

function Error({message = "Something went wrong!" }) {
  return (
    <div className='errorHolder'>
      <div className='error'>
        <p>Oh no! {message}</p>
        <p>Try refreshing your page or running <code>rm -rf /</code></p>
      </div>
    </div>

  )
}

export default Error