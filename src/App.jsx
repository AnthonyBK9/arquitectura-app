import { useState } from 'react'
import './App.css'
import AboutMe from './components/aboutMe/AboutMe'
import Header from './components/header/Header'
import Model from './components/model/Model'

function App() {
  
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Model />
    </div>
  )
}

export default App
