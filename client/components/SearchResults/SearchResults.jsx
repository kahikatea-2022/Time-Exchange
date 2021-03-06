import React from 'react'
import { Link } from 'react-router-dom'
import Rating from '../Rating'

function UserResults({ user, title }) {
  return (
    <div className="search-results-container">
      <h2 className="user-name">
        {user.firstName} {user.lastName}
      </h2>
      <Link id="link" to={`../user/${user.id}`}>
        <div className="pfp-info">
          <div className="image-username-wrapper">
            <img
              className="results-profile-image"
              src={user.picture || '/defaultProfileImage.jpg'}
            />
            <h2 id="user-name">{user.firstName}</h2>
            <Rating rating={user.rating} />
            <h3 className="profile-region">Location: {user.region}</h3>
          </div>
          <div>
            <>
              <h4 id="i-want-to">{`I want to ${title}`}</h4>
              <ul className="skill-list">
                {user.skills.map((item) => {
                  return (
                    item.role == title && <li key={item.id}>{item.skill}</li>
                  )
                })}
              </ul>
            </>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default UserResults
