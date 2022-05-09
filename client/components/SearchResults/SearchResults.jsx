import React from 'react'
import { Link } from 'react-router-dom'

function UserResults({ user, title }) {
  return (
    <div className='search-container'>
    <div className='search-results-container'>
      <h2 className='user-name'>
        {user.firstName} {user.lastName}
      </h2>
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
    </div>
    </div>
  )
}

export default UserResults
