import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { cacheUser } from './auth0-utils'
// import PingRoutes from './components/PingRoutes'
import Registration from './pages/Registration'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import MyProfile from './pages/MyProfile'
import Results from './pages/Results'

function App() {
  cacheUser(useAuth0)

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="/myprofile/edit" element={<Registration />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/results/:type" element={<Results />} />
      </Routes>
    </div>
  )
}

export default App
