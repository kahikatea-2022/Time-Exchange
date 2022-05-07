// May need to use category name rather than id in options
import React from 'react'
import { range } from 'lodash'

function SkillForm({role, changeFunct, array, categories}) {
  return (
    <div>
    <h2>{role}</h2>
      {range(5).map((i) => {
        return(
        <div key={`learn${i}`}>
          <label htmlFor={`learn${i}skill`}>Skill</label>
          <input name={`learn${i}skill`} type='text' onChange={(e) => changeFunct(e, i, "skill")} value={array[i]?.skill || ''}/>
          <label htmlFor={`learn${i}category`}>Category</label>
          <select name={`learn${i}category`} onChange={(e) => changeFunct(e, i, "category")} value={array[i]?.category|| "Other"}>
            {categories.map((cat) => (
              <option value={cat.id} key={cat.id}>{cat.name}</option>
            ))}
          </select>
        </div>
        )
      })}
  </div>
  )
}

export default SkillForm