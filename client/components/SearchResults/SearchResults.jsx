import React from 'react'
import { Link } from 'react-router-dom'

function UserResults({ user, title }) {
  return (
    <div className="search-container">
      <div className="search-results-container">
        <h2 className="user-name">
          {user.firstName} {user.lastName}
        </h2>
        <Link id="link" to={`../user/${user.id}`}>
          <div className="pfp-info">
            <div className="image-username-wrapper">
              <img
                className="results-profile-image"
                src="/defaultProfileImage.jpg"
              />
              <h2 id="user-name">{user.firstName}</h2>
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
    </div>
  )
}

export default UserResults
