import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import SearchResults from '../components/SearchResults/SearchResults'
import { retrieveUsers } from './resultsHelper'

function Results() {
  const user = useSelector((state) => state.user)
  const [users, setUsers] = useState([])
  const { type } = useParams()
  const [resultsType, setResultsType] = useState(type)
  const [error, setError] = useState('')

  useEffect(() => {
    setResultsType(type)
  }, [type])

  useEffect(() => {
    user.token && retrieveUsers(user.token, setUsers, setError)
  }, [user]) // dependency is set to user because initially there is no token stored for the user in redux when there is a refresh, and the API call returns an error when useEffect first runs, so it is needed to be re-run when the user is updated in redux with the token
  const title = type == 'teachers' ? 'teach' : 'learn'

  if (error) {
    return <p>wah wah doesnt work</p>
  } else {
    return (
      <div>
        <h1>{`Here are your ${type}`}</h1>
        {users.map((result) => {
          return (
            <SearchResults
              user={result}
              resultsType={resultsType}
              title={title}
              key={result.id}
            />
          )
        })}
      </div>
    )
  }
}

export default Results
