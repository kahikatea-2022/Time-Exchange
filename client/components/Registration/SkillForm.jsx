// May need to use category name rather than id in options
import React from 'react'

function SkillForm({role, changeFunct, array, categories, required = false}) {

  function handleChange (event, index, key) {
    changeFunct( array.map((val, idx) => {
      return idx !== index ? val : {...val, [key]: event.target.value} 
    }))
  }

  return (
    <div className='skillform-container'>
    <h2 id='profile-title'>{role == 'learn' ? "I want to learn" : "I can teach"}</h2>
      {array.map((value, index) => {
        return(
        <div className='skill-category-container' key={`${role}${index}`}>
          <label id='skill' htmlFor={`learn${index}skill`}>Skill</label>
          <input id='skill-input' name={`learn${index}skill`} type='text' onChange={(e) => handleChange(e, index, "skill")} value={array[index].skill } required={index === 0 && required}/>
          <label id='category' htmlFor={`learn${index}category`}>Category</label>
          <select className='select-category' name={`learn${index}category`} onChange={(e) => handleChange(e, index, "category")} value={array[index].category} >
            {categories.map((category) => (
              <option value={category.name} key={category.id}>{category.name}</option>
            ))}
          </select>
        </div>
        )
      })}
  </div>
  )
}

export default SkillForm