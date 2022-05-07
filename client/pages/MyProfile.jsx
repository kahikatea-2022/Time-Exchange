import React from 'react'
import { useSelector } from 'react-redux'

function MyProfile() {
  const user = useSelector((globalState) => globalState.user)

  const teach = user.skills.filter((x) => x.role === 'teach')
  const learn = user.skills.filter((x) => x.role === 'learn')

  return (
    <div className='page-container'>
      <h2>My Profile</h2>
      <div className="profile-container">
        <div className="profile-column">
          <div className="profile-card">
            <div className="profile-welcome">Welcome {user.firstName}!</div>
            <img src={user.picture} alt={user.firstName} />
            <div className="profile-about">{user.about}</div>
          </div>
        </div>
        <div className="profile-column">
          <div className="profile-card">
            <h4>I can TEACH:</h4>
            {teach.map((x) => (
              <div className="profile-skill" key={x.id}>{x.skill}</div>
            ))}
          </div>
          <div className="profile-card">
            <h4>I want to LEARN:</h4>
            {learn.map((x) => (
              <div className="profile-skill" key={x.id}>{x.skill}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyProfile
