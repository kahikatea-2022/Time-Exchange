import React, { useState } from 'react'
import BioForm from '../components/Registration/BioFrom'
import SkillsForm from '../components/Registration/SkillsForm'
// import RegistrationForm from '../components/RegistrationForm/RegistrationForm'


function Registration() {
  const [bio, setBio] = useState(() => null) //get default values to pass in here
  const [learn, setLearn ] = useState(() => Array.from({length: 5}, () => ({role: '', skill: '', category: ''}))) 
  const [teach, setTeach ] = useState(() => Array.from({length: 5}, () => ({role: '', skill: '', category: ''}))) 

  // need values from db if exists
  return (
    <div>
      <h1>Register</h1>
      <BioForm setBio={setBio} bio={bio}/>
      <SkillsForm setLearn={setLearn} setTeach={setTeach} learn={learn} teach={teach}/>

    </div>
  )
}

export default Registration