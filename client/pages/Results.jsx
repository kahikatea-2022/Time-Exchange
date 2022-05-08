import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getUsers } from '../apis/users'
import SearchResults from '../components/SearchResults/SearchResults'

function Results() {
  const user = useSelector((state) => state.user)
  const [users, setUsers] = useState([])
  const { type } = useParams()
  const [resultsType, setResultsType] = useState(type)

  useEffect(() => {
    setResultsType(type)
  }, [type])

  useEffect(() => {
    getUsers(user.token)
      .then((users) => {
        setUsers(users.users)
        return null
      })
      .catch((err) => {
        const errMessage = err.response?.body?.error?.title
        throw new Error(errMessage || err.message)
      })
  }, [user]) // dependency is set to user because initially there is no token stored for the user in redux when there is a refresh, and the API call returns an error when useEffect first runs, so it is needed to be re-run when the user is updated in redux with the token

  return (
    <div>
      <h1>Results page Title</h1>
      {users.map((result) => {
        return (
          <SearchResults
            user={result}
            resultsType={resultsType}
            key={result.id}
          />
        )
      })}
    </div>
  )
}

export default Results
