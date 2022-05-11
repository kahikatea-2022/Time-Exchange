import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Rating from '../components/Rating'

function MyProfile() {
  const user = useSelector((globalState) => globalState.user)

  const teach = user.skills.filter((x) => x.role === 'teach')
  const learn = user.skills.filter((x) => x.role === 'learn')

  return (
    <div className="page-container">
      <h2 id="my-profile-title">My Profile</h2>
      <div className="profile-container">
        <div className="profile-column">
          <div className="profile-card">
            <div className="profile-welcome">Welcome {user.firstName}!</div>
            <img id="user-pfp" src={user.picture} alt={user.firstName} />
            <Rating rating={user.rating} />
            <div className="profile-region">Location: {user.region}</div>
            <div className="profile-about">{user.about}</div>
            <div className="profile-link">
              <Link id="profile-link" to="/myprofile/edit">
                Edit my profile
              </Link>
            </div>
          </div>
        </div>
        <div className="profile-column">
          <div className="profile-card">
            <h4>I can TEACH:</h4>
            {teach.map((x) => (
              <div className="profile-skill" key={x.id}>
                {x.skill}
              </div>
            ))}
          </div>
          <div className="profile-card">
            <h4>I want to LEARN:</h4>
            {learn.map((x) => (
              <div className="profile-skill" key={x.id}>
                {x.skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyProfile
