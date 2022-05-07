// To do
//  set waiting while waiting for 

import React, { useEffect, useState } from 'react'
import {fetchCategories } from './registrationHelper'
import SkillForm from './SkillForm'

function SkillsForm({learn, setLearn, teach, setTeach}) {
  const [ categories, setCategories] = useState([])
  
  useEffect(() => {
    fetchCategories(setCategories)
  },[])

  function handleChange (setFunc) {
    return (e, i, key) => {
      const value = e.target.value
      const newLearn = learn.map((val, index) => {
        return index !== i ? val : {...val, [key]: value} 
      })
      setFunc(newLearn)
    }
  }
  return (
    <div>
      <SkillForm role="Learn" changeFunct={handleChange(setLearn)} array={learn} categories={categories} />
      <SkillForm role="Teach" changeFunct={handleChange(setTeach)} array={teach} categories={categories} />
      <button onClick={null}>
        Register
      </button>
    </div>
  )
}

export default SkillsForm