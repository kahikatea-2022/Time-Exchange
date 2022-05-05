import React, { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { getLoginFn, getLogoutFn, getRegisterFn } from '../../auth0-utils'
import {
  IfAuthenticated,
  IfNotAuthenticated,
} from '../Authenticated/Authenticated'
import { useSelector } from 'react-redux'

import { GiHamburgerMenu } from 'react-icons/gi'

 
function Nav() {
  const [open, setOpen] = useState(false)
  const user = useSelector((state) => state.user)
  const login = getLoginFn(useAuth0)
  const logout = getLogoutFn(useAuth0)
  const register = getRegisterFn(useAuth0)

  function handleLogin(event) {
    event.preventDefault()
    login()
  }

  function handleLogoff(event) {
    event.preventDefault()
    logout()
  }

  function handleRegister(event) {
    event.preventDefault()
    register()
  }

  const toggleMenu = () => {
    setOpen(!open)
  }

  return (
    <nav>
            <div className="hamburger" onClick={toggleMenu}>
              <GiHamburgerMenu />
            <h1 className="logo">Full-stack Boilerplate with Auth0</h1>
            </div>
            {open && (
      <>
            <IfAuthenticated>
              <p>
                Hello, {user.name} {user.roles ? `(${user.roles})` : null}
              </p>
          
                <a href="/" onClick={handleLogoff} className="nav-link">
                  Log out
                </a>
                <a href="/" onClick={handleLogoff} className="nav-link">
                  My profile
                </a>
         
            </IfAuthenticated>
            <IfNotAuthenticated>
            
              <p>Hello, guest</p>
          
                <a href="/" onClick={handleLogin} className="nav-link">
                  Sign in
                </a>
                <a href="/" onClick={handleRegister} className="nav-link">
                  Register
                </a>
      
            </IfNotAuthenticated>
     
      </>
        )}
  </nav>
  )
}

export default Nav


// IF not logged in links:
// Sign in
// Register
// IF logged in links:
// Logout
// My Profile
// Find friends/teachers/students/what ever you want to call it