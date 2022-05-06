import React from 'react'
import { useSelector } from 'react-redux'

function WaitIndicator() {
  const waiting = useSelector((state) => state.waiting)

  return waiting ? (
    <img className='wait-indicator' src='/daisy.gif' />
  ) : null
}

export default WaitIndicator