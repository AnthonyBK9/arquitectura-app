import React, { useState } from 'react'
import { useEffect } from 'react';
import './style/header.css'

const Header = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    },[])
    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
    console.log(scrolled);
  return (
    <header className="header" id='home'>
        <div className="header-container">
            <div className="container header-container">
                <div className={scrolled ? 'scrolled bar' : 'bar'}>
                        <div className="logo">
                            <h1 className="name-site">
                                Arquitectura<span>Bosque</span>
                            </h1>
                        </div>
                        <div className="contact footer-movil">
                            {/* <a className={scrolled ? 'phone-viewable' : 'phone'} href="tel:01-800-0000-000">01-800-0000-000</a> */}
                            
                            <nav className="nav">
                                <a href="#home" className={activeLink === 'home' ? 'active link' : 'link'} onClick={() => onUpdateActiveLink('home')}>Inicio</a>
                                <a href="#about" className={activeLink === 'about' ? 'active link' : 'link'} onClick={() => onUpdateActiveLink('about')}>Nosotros</a>
                                <a href="#model" className={activeLink === 'model' ? 'active link' : 'link'} onClick={() => onUpdateActiveLink('model')}>Modelos</a>
                                <a href="#gallery" className={activeLink === 'gallery' ? 'active link' : 'link'} onClick={() => onUpdateActiveLink('gallery')}>Galería</a>
                                <a href="#contact" className={activeLink === 'contact' ? 'active link' : 'link'} onClick={() => onUpdateActiveLink('contact')}>Contacto</a>
                            </nav>
                        </div>
                    </div>
                    <div className="slogan">
                        <h1>Tu casa en el bosque</h1>
                        <p>Construimos la casa de tus sueños</p>
                    </div>
                </div>
            </div>
    </header>
  )
}

export default Header