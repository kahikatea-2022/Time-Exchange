// May need to use category name rather than id in options
import React from 'react'

function SkillForm({role, changeFunct, array, categories, required = false}) {

  function handleChange (event, index, key) {
    changeFunct( array.map((val, idx) => {
      return idx !== index ? val : {...val, [key]: event.target.value} 
    }))
  }

  return (
    <div>
    <h2>{role == 'learn' ? "I want to learn" : "I can teach"}</h2>
      {array.map((value, index) => {
        return(
        <div key={`${role}${index}`}>
          <label htmlFor={`learn${index}skill`}>Skill</label>
          <input name={`learn${index}skill`} type='text' onChange={(e) => handleChange(e, index, "skill")} value={array[index].skill } required={index === 0 && required}/>
          <label htmlFor={`learn${index}category`}>Category</label>
          <select name={`learn${index}category`} onChange={(e) => handleChange(e, index, "category")} value={array[index].category } >
            {categories.map((category) => (
              <option value={category.id} key={category.id}>{category.name}</option>
            ))}
          </select>
        </div>
        )
      })}
  </div>
  )
}

export default SkillForm