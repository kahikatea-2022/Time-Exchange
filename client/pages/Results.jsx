import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import SearchResults from '../components/SearchResults/SearchResults'
import { retrieveUsers } from './resultsHelper'
import Error from '../components/Error/Error'
import WaitIndicator from '../components/WaitIndicator/WaitIndicator'

function Results() {
  const user = useSelector((state) => state.user)
  const waiting = useSelector((state) => state.waiting)
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
  const role = type == 'teachers' ? 'teach' : 'learn'

  const [search, setSearch] = useState('')

  const filteredUsers = search
    ? users.filter((user) =>
        user.skills.some(
          (skill) =>
            skill.role === role &&
            (skill.skill.toLowerCase().includes(search.toLowerCase()) ||
              skill.category.toLowerCase().includes(search.toLowerCase()))
        )
      )
    : users

  const onSearchChange = (event) => {
    setSearch(event.currentTarget.value)
  }

  if (waiting) {
    return <WaitIndicator />
  } else if (error) {
    return <Error message={error} />
  } else {
    return (
      <div className="results-container">
        <div className="type-heading-container">
          <h1 className="results-title">{`Here are your ${type}`}</h1>
        </div>
        <div className="results-title-container">
          {
            <input
              className="search-bar"
              type="search"
              placeholder="Search by Skill or Category.."
              value={search}
              onChange={onSearchChange}
            />
          }
        </div>

        <div className="results">
          {filteredUsers.map((result) => {
            return (
              <SearchResults
                user={result}
                resultsType={resultsType}
                title={role}
                key={result.id}
              />
            )
          })}
        </div>
      </div>
    )
  }
}

export default Results
