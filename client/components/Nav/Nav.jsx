import React, { useState, useRef, useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { getLoginFn, getLogoutFn, getRegisterFn } from '../../auth0-utils'
import {
  IfAuthenticated,
  IfNotAuthenticated,
} from '../Authenticated/Authenticated'
import { useSelector } from 'react-redux'

import { GiHamburgerMenu, GiYinYang } from 'react-icons/gi'
import { Link } from 'react-router-dom'

function Nav() {
  const [open, setOpen] = useState(false)
  const user = useSelector((state) => state.user)
  const login = getLoginFn(useAuth0)
  const logout = getLogoutFn(useAuth0)
  const register = getRegisterFn(useAuth0)

  const ref = useRef()

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (open && ref.current && !ref.current.contains(e.target)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', checkIfClickedOutside)

    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', checkIfClickedOutside)
    }
  }, [open])

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
    <nav className="nav-menu">
      <div className="hamburger-container" onClick={toggleMenu} ref={ref}>
        {open ? (
          <GiYinYang className="hamburger" onClick={toggleMenu} />
        ) : (
          <GiHamburgerMenu className="hamburger" onClick={toggleMenu} />
        )}
      </div>
      {open && (
        <ul className="main-nav" onClick={toggleMenu} ref={ref}>
          <IfAuthenticated>
            <li className="nav-item">
              <Link id="nav-link" to="/results/teachers">
                Learn
              </Link>
            </li>
            <li className="nav-item">
              <Link id="nav-link" to="/results/learners">
                Teach
              </Link>
            </li>
            <li className="nav-item">
              <Link id="nav-link" to="/myprofile">
                My Profile
              </Link>
            </li>
            <li className="nav-item">
              <a id="nav-link" href="/" onClick={handleLogoff}>
                Logout
              </a>
            </li>
          </IfAuthenticated>

          <IfNotAuthenticated>
            <li className="nav-item">
              <a id="nav-link" href="/" onClick={handleLogin}>
                Login
              </a>
            </li>
            <li className="nav-item">
              <a id="nav-link" href="/" onClick={handleRegister}>
                Register
              </a>
            </li>
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
