import React from 'react'
import { useSelector } from 'react-redux'
import Registration from '../components/Registration/Registration'

function MyProfile() {
  const user = useSelector((globalState) => globalState.user)

  return (
    <div>
      MyProfile
      <code>{JSON.stringify(user, null, 2)}</code>
    </div>
    <div>
        {user.about}
    </div>
  )
}

export default MyProfile
