import { useState } from 'react'
import './App.css'
import AboutMe from './components/aboutMe/AboutMe'
import Header from './components/header/Header'

function App() {
  
  return (
    <div className="App">
      <Header />
      <AboutMe />
    </div>
  )
}

export default App
