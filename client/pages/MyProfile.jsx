import React from 'react'
import { useSelector } from 'react-redux'

function MyProfile() {
  const user = useSelector((globalState) => globalState.user)

  return (
    <React.Fragment>
      <div>
        MyProfile
        <code>{JSON.stringify(user, null, 2)}</code>
      </div>
      <div>{user.about}</div>
    </React.Fragment>
  )
}

export default MyProfile
