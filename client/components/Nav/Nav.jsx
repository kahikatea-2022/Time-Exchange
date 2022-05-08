import React, { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { getLoginFn, getLogoutFn, getRegisterFn } from '../../auth0-utils'
import {
  IfAuthenticated,
  IfNotAuthenticated,
} from '../Authenticated/Authenticated'
import { useSelector } from 'react-redux'

import { GiHamburgerMenu } from 'react-icons/gi'
import { Link } from 'react-router-dom'

 
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
    <nav className='nav-menu'>
            <div className="hamburger-container" onClick={toggleMenu}>
              <GiHamburgerMenu className='hamburger' onClick={toggleMenu} />
            </div>
            {open && (
          <ul  className='main-nav'>
            <IfAuthenticated>
                <li className="nav-item"><a id="nav-link" href='/' onClick={handleLogoff}>Logout</a></li>
                <li className="nav-item"><Link id="nav-link" to='/myprofile'>Search</Link></li>
                <li className="nav-item"><Link id="nav-link" to='/myprofile'>My Profile</Link></li>
                
            </IfAuthenticated>

            <IfNotAuthenticated>
              <li className="nav-item"><a id="nav-link" href='/' onClick={handleLogin}>Login</a></li>
              <li className="nav-item"><a id="nav-link" href='/' onClick={handleRegister}>Register</a></li>
            </IfNotAuthenticated>
     
          </ul>
        
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