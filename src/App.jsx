import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import About from './components/About'
import Placements from './components/Placements'
import Registration from './components/Registration'
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/placements' element={<Placements/>}/>
        <Route path='/registration' element={<Registration/>}/>
      </Routes>
    </Router>
    
    </>
  )
}

export default App
