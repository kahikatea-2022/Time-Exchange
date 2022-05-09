import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { retrieveUsers } from './resultsHelper'

function Profile() {
  const { id } = useParams()
  const [user, setUser] = useState({})
  const [error, setError] = useState('')
  const waiting = useSelector((state) => state.waiting)

  useEffect(() => {
    retrieveUsers(id, setUser, setError)
  }, [])

  const teach = user.skills.filter((x) => x.role === 'teach')
  const learn = user.skills.filter((x) => x.role === 'learn')

  return (
    <div className="page-container">
      <h2>Teachers Profile</h2>
      <div className="profile-container">
        <div className="profile-column">
          <div className="profile-card">
            <div className="profile-welcome">My name is {user.firstName}</div>
            <img src={user.picture} alt={user.firstName} />
            <div className="profile-about">
              Learn about me:<br></br>
              <br></br>
              {user.about}
            </div>
            <div className="profile-card">
              Connect with me directly:<br></br>
              <br></br>
              {user.email}
            </div>
          </div>
        </div>
        <div className="profile-column">
          <div className="profile-card">
            <h4>Things I can teach you about:</h4>
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

export default Profile
