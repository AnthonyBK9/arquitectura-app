import { useState } from 'react'
import './App.css'
import AboutMe from './components/aboutMe/AboutMe'
import Footer from './components/footer/Footer'
import Gallery from './components/gallery/Gallery'
import Header from './components/header/Header'
import Model from './components/model/Model'

function App() {
  
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Model />
      <Gallery />
      <Footer />
    </div>
  )
}

export default App
