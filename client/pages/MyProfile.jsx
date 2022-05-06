import React from 'react'
import { useSelector } from 'react-redux'

function MyProfile() {
  const user = useSelector((globalState) => globalState.user)

  const teach = user.skills.filter((x) => x.role === 'teach')
  const learn = user.skills.filter((x) => x.role === 'learn')

  return (
    <React.Fragment>
      <h2>MyProfile</h2>
      <div className="profile-container">
        <div className="profile-column">
          <div>Welcome {user.firstName}!</div>
          <img src={user.picture} alt={user.firstName} />
          <div>{user.about}</div>
        </div>
        <div className="profile-column">
          <div>
            <h5>Teach</h5>
            {teach.map((x) => (
              <div key={x.id}>{x.skill}</div>
            ))}
          </div>
          <div>
            <h5>Learn</h5>
            {learn.map((x) => (
              <div key={x.id}>{x.skill}</div>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default MyProfile
