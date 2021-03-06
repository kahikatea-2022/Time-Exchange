import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { retrieveUsers } from './profileHelper'
import WaitIndicator from '../components/WaitIndicator/WaitIndicator'
import Error from '../components/Error/Error'
import Chat from '../components/Chat/Chat'
import Rating from '../components/Rating'
import { updateUserRating } from '../apis/users'

function Profile() {
  const { id } = useParams()
  const [user, setUser] = useState({})
  const [error, setError] = useState('')
  const waiting = useSelector((state) => state.waiting)
  const token = useSelector((globalState) => globalState.user.token)

  useEffect(() => {
    retrieveUsers(id, setUser, setError)
  }, [])

  if (waiting) {
    return <WaitIndicator />
  } else if (error) {
    // we want to show this if user not found
    return <Error message={error} />
  } else if (!user.username) {
    return <div>No users found</div>
  } else {
    const teach = user.skills.filter((x) => x.role === 'teach')
    const learn = user.skills.filter((x) => x.role === 'learn')
    const onRatingChange = (newRating) => {
      setUser({ ...user, rating: newRating })
      updateUserRating(user.id, newRating, token)
    }

    return (
      <div className="page-container">
        <h2 id="teachers-profile">Profile</h2>
        <div className="profile-container">
          <div className="profile-column">
            <div className="profile-card">
              <div className="profile-welcome">My name is {user.firstName}</div>
              <img
                id="user-pfp"
                src={user.picture || '/defaultProfileImage.jpg'}
                alt={user.firstName}
              />
              <Rating rating={user.rating || 0} onChange={onRatingChange} />
              <div className="profile-region">Location: {user.region}</div>
              <div className="profile-about">
                Learn about me:<br></br>
                <br></br>
                {user.about}
              </div>
            </div>
          </div>
          <div className="profile-column">
            <div className="profile-card">
              <h4>Things I can TEACH you:</h4>
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
            <Chat />
          </div>
        </div>
      </div>
    )
  }
}

export default Profile
