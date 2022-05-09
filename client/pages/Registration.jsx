import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import BioForm from '../components/Registration/BioForm'
import SkillForm from '../components/Registration/SkillForm'
import { fetchCategories, saveUser } from './registrationHelper'


function initalSkillArray (n, role) {
  return Array.from({length: n}, () => ({role, skill: '', category: ''}))
}

function Registration() {

  const { pathname } = useLocation();
  const title = pathname.includes("registration") ? "Registration" : "Edit profile"

  const redirect = useNavigate()
  const user = useSelector(state => state.user)
  const [bio, setBio] = useState(() => {}) 
  const [learn, setLearn ] = useState(initalSkillArray(5, 'learn')) 
  const [teach, setTeach ] = useState(initalSkillArray(5, 'teach'))
  // const [errors, setErrors] = useState(() => [])
  const [ categories, setCategories] = useState([])

  function categoryNameToId (name) {
    return categories.find((category) => category.name == name)?.id || 1
  }

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
    if (user.id) {
      redirect('/myprofile/edit')
    }
  }, [user])

  //get user details from API for edit

  function handleSubmit (event) {
    event.preventDefault()
    const skills = [
      ...learn.filter(skill => skill.skill !== '').map(skill => ({...skill, category: categoryNameToId(skill.category)})),
      ...teach.filter(skill => skill.skill !== '').map(skill => ({...skill, category: categoryNameToId(skill.category)})),
    ]
    const userDetails = {...bio, skills}
    const error = saveUser(userDetails, user.token, redirect, !!user.id)
  }
  return (
    <div className='rego-page-container'>
      <div className='registration-container'>
        {/* error div goes here */}
        <h1 className='rego-title'>{title}</h1>
        <form onSubmit={handleSubmit}>
          <BioForm setBio={setBio} bio={bio} />
          <SkillForm role='learn' changeFunct={setLearn} array={learn} categories={categories} />
          <SkillForm role='teach' changeFunct={setTeach} array={teach} categories={categories} required={true}/>
          <div className='btn'>
          <button id='register-btn' type='submit'>{user.id ? "Update" : "Register"}</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Registration