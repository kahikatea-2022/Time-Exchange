import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { cacheUser } from './auth0-utils'
// import PingRoutes from './components/PingRoutes'
import Registration from './components/Registration/Registration'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import MyProfile from './pages/MyProfile'

function App() {
  cacheUser(useAuth0)

  return (
    <div className="app">
      {/* Put header here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </div>
  )
}

export default App
