import React from 'react'

function UserResults({ user, title }) {
  return (
    <div>
      <h2>
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
  )
}

export default UserResults
