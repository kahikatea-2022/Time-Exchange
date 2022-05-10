import React from 'react'
import Star from './Star'

function Rating({ rating, onChange }) {
  return (
    <div style={{ fontSize: '20px' }}>
      {[1, 2, 3, 4, 5].map((value) => (
        <Star
          key={value}
          filled={value <= rating}
          onClick={() => onChange?.(value)}
        />
      ))}
    </div>
  )
}
export default Rating
