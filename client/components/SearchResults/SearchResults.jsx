import React from 'react'
import { Link } from 'react-router-dom'

function UserResults({ user, title }) {
  return (
    <Link to={`../user/${user.id}`}>
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
    </Link>
  )
}

export default UserResults
