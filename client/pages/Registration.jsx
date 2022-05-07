import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import BioForm from '../components/Registration/BioFrom'
import SkillForm from '../components/Registration/SkillForm'
import { fetchCategories, saveUser } from './registrationHelper'


function initalSkillArray (n, role) {
  return Array.from({length: n}, () => ({role, skill: '', category: ''}))
}

function Registration() {

  const redirect = useNavigate()
  const user = useSelector(state => state.user)
  const [bio, setBio] = useState(() => {}) 
  const [learn, setLearn ] = useState(initalSkillArray(5, 'learn')) 
  const [teach, setTeach ] = useState(initalSkillArray(5, 'teach'))
  // const [errors, setErrors] = useState(() => [])
  const [ categories, setCategories] = useState([])

  useEffect(() => {
    fetchCategories(setCategories)
  },[])

  useEffect(() => {
    setBio({firstName: user.firstName, lastName: user.lastName, username: user.username, email: user.email, about: user.about})
    if (user.skills.length > 0) {
      // NOT DRY - Refactor!!!!
      const currentLearn = user.skills.filter(skill => skill.role === 'learn')
      const currentTeach = user.skills.filter(skill => skill.role === 'teach')
      setLearn([...currentLearn, ...learn.slice(currentLearn.length)])
      setTeach([...currentTeach, ...learn.slice(currentTeach.length)])
    }
  }, [user])

  //get user details from API for edit

  function handleSubmit (event) {
    event.preventDefault()
    const userDetails = {...bio, skills: [...learn.filter(skill => skill.skill !== ''), ...teach.filter(skill => skill.skill !== '')]}
    const error = saveUser(userDetails, user.token, redirect) //error not used
  }
  return (
    <div>
      {/* error div goes here */}
      <h1>{user.id ? "Edit My Profile" : "Registration"}</h1>
      <form onSubmit={handleSubmit}>
        <BioForm setBio={setBio} bio={bio} />
        <SkillForm role='learn' changeFunct={setLearn} array={learn} categories={categories} />
        <SkillForm role='teach' changeFunct={setTeach} array={teach} categories={categories} required={true}/>
        <button type='submit'>Register</button>
      </form>
    </div>
  )
}

export default Registration