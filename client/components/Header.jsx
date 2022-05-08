import React from 'react'
import Nav from './Nav/Nav'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <div className="header-container">
        <a href="/">
          <h1 className="header-title">TIMEEXCHANGE</h1>
        </a>
      </div>
      <Nav />
    </>
  )
}

export default Header
