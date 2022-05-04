import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { cacheUser } from './auth0-utils'
import Nav from './components/Nav/Nav'
// import PingRoutes from './components/PingRoutes'
import Registration from './components/Registration/Registration'
import Users from './components/Users'
import { Routes, Route } from 'react-router-dom'

function App() {
  cacheUser(useAuth0)

  return (
    <div className="app">
      <Nav /> {/* call from header instead */}
      <Routes>
        <Route path="/" element={<Users />} />
        {/* <Route path="/" element={<PingRoutes />} /> */}
        <Route path="/profile" element={<Registration />} />
      </Routes>
    </div>
  )
}

export default App
