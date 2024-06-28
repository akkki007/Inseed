import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Placements from './components/Placements'
import Registration from './components/Registration'
import About from './components/About'
function App() {
  return (
    <>
    
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/placements' element={<Placements/>}/>
        <Route path='/registration' element={<Registration/>}/>
        <Route path="/About" element={<About/>} />
      </Routes>
    </Router>
    
    </>
  )
}

export default App
