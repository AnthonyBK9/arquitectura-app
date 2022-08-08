import React from 'react';
import './style/footer.css'

const Footer = () => {

  return (
    <footer className="footer mt-5">
        {/* <div className="container ">
            <div className={scrolled ? 'setScrolled bar' : 'bar'}>
                <div className="logo">
                    <h1 className="name-site">
                        Arquitectura<span>Bosque</span>
                    </h1>
                </div>
                <div className="contact footer-movil">
                    <a className="phone" href="tel:01-800-0000-000">01-800-0000-000</a>
                    <nav className="nav">
                        <a href="#" className={activeLink === 'home' ? 'active link' : 'link'} onClick={() => onUpdateActiveLink('home')}>Inicio</a>
                        <a href="#" className={activeLink === 'about' ? 'active link' : 'link'} onClick={() => onUpdateActiveLink('about')}>Nosotros</a>
                        <a href="#" className={activeLink === 'model' ? 'active link' : 'link'} onClick={() => onUpdateActiveLink('model')}>Modelos</a>
                        <a href="#" className={activeLink === 'gallery' ? 'active link' : 'link'} onClick={() => onUpdateActiveLink('gallery')}>Galería</a>
                        <a href="#" className={activeLink === 'contact' ? 'active link' : 'link'} onClick={() => onUpdateActiveLink('contact')}>Contacto</a>
                    </nav>
                </div>
            </div>
        </div> */}
        <p className="copyright">Creado por Antonio Bermúdez &copy;</p>
    </footer>
  )
}

export default Footer