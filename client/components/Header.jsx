import React from 'react'
import Nav from './Nav/Nav'

function Header() {
  return (
    <>
      <div className="header-container">
        <a id="nav-link" href="/">
          <h1 className="header-title">
            <img className="header-logo" src="/logo.png" /> Karma
          </h1>
        </a>
      </div>
      <Nav />
    </>
  )
}

export default Header
