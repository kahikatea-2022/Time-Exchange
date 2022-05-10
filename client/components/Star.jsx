import React from 'react'
import { FaRegStar, FaStar } from 'react-icons/fa'

function Star({ filled, onClick }) {
  return filled ? <FaStar onClick={onClick} /> : <FaRegStar onClick={onClick} />
}
export default Star
