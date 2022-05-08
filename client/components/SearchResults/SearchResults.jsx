import React from 'react'

function UserResults({ user, resultsType }) {
  return (
    <div>
      <h1>I am a search result card</h1>
      <h2>
        {user.firstName} {user.lastName}
      </h2>
      <div>
        {resultsType == 'teachers' && (
          <>
            <h4>I teach</h4>
            <ul>
              {user.skills.map((item) => {
                return (
                  item.role == 'teach' && <li key={item.id}>{item.skill}</li>
                )
              })}
            </ul>
          </>
        )}

        {resultsType == 'learners' && (
          <>
            <h4>I want to learn</h4>
            <ul>
              {user.skills.map((item) => {
                return (
                  item.role == 'learn' && <li key={item.id}>{item.skill}</li>
                )
              })}
            </ul>
          </>
        )}
      </div>
      <p>{user.email}</p>
    </div>
  )
}

export default UserResults
