import { useState } from 'react'
import Navbar from './components/elements/Navbar'
import Sidebar from './components/elements/Sidebar'
import { Routes, Route } from 'react-router-dom'
import About from './components/pages/About'
import Resume from './components/pages/Resume'
import Works from './components/pages/Works'
import Contact from './components/pages/Contact'

function App() {

  return (
    
    <div>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<About/>} />
        <Route path="/Cv" element={<Resume/>} />
        <Route path="/Works" element={<Works/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </div>
  )
}

export default App
