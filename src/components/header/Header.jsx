import React from 'react'
import './style/header.css'

const Header = () => {
  return (
    <header className="header">
        <div className="container header-container">
            <div className="bar">
                <div className="logo">
                    <h1 className="name-site">
                        Arquitectura<span>Bosque</span>
                    </h1>
                </div>
                <div className="contact">
                    <a className="phone" href="tel:01-800-0000-000">01-800-0000-000</a>
                    <nav className="nav">
                        <a className="link" href="#">Inicio</a>
                        <a className="link" href="#">Nosotros</a>
                        <a className="link" href="#">Modelos</a>
                        <a className="link" href="#">Galería</a>
                        <a className="link" href="#">Contacto</a>
                    </nav>
                </div>
            </div>
            <div className="slogan">
                <h1>Tu casa en el bosque</h1>
                <p>Construimos la casa de tus sueños</p>
            </div>
        </div>
    </header>
  )
}

export default Header