import React from 'react'

function UserResults({ user, title }) {
  return (
    <div>
      <img className="results-profile-image" src="/defaultProfileImage.jpg" />
      <h2>{user.firstName}</h2>
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
    </div>
  )
}

export default UserResults
