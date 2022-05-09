import React from 'react'

function UserResults({ user, title }) {
  return (
    <div className='search-container'>
    <div className='search-results-container'>
      <h2 className='user-name'>
        {user.firstName} {user.lastName}
      </h2>
      <div>
        <>
          <h4>{`I want to ${title}`}</h4>
          <ul>
            {user.skills.map((item) => {
              return item.role == title && <li key={item.id}>{item.skill}</li>
            })}
          </ul>
        </>
      </div>
      <p>{user.email}</p>
    </div>
    </div>
  )
}

export default UserResults
