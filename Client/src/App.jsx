import Home from "./Components/Home"
import Navbar from "./Components/Navbar"
import About from "./Components/About"
import Admission from "./Components/Admission"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import React from 'react'
import Signup from "./Components/Signup"
import Login from "./Components/Login"
import Contact from "./Components/Contact"
function App() {

  return (
    <BrowserRouter>
     
     
      <Routes>
      
        {/* <Route path="/" element={<Signup/>} /> */}
        <Route path="/signup" element={<><Signup /></>} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<><Navbar/><Home /></>} />
        <Route path="/home" element={<><Navbar/><Home /></>} />
        <Route path="/about" element={<><Navbar/><About /></>} />
        <Route path="/contact" element={<><Navbar/><Contact /></>} />
        <Route path="/admission" element={<><Navbar/><Admission /></>} />

      </Routes>
    </BrowserRouter>

  )
}

export default App
