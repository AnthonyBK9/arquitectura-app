import React from 'react'
import './style/footer.css'

const Footer = () => {
  return (
    <footer className="footer mt-5">
        <div className="container ">
            <div className="bar">
                <div className="logo">
                    <h1 className="name-site">
                        Arquitectura<span>Bosque</span>
                    </h1>
                </div>
                <div className="contact footer-movil">
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
        </div>
        <p className="copyright">Creado por Antonio Bermúdez &copy;</p>
    </footer>
  )
}

export default Footer