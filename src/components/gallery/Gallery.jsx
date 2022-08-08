import React from 'react'
import images from '../../assets/js/images.js'
import './style/gallery.css'

const Gallery = () => {
  return (
    <section className="container mt-5">
        <h2>Galería</h2>
        <div className="gallery">
            <div className="image">
                <img src={images[0].img} alt={images[0].title} />
            </div>
            <div className="image">
                <img src={images[1].img} alt={images[1].title} />
            </div>
            <div className="image">
                <img src={images[2].img} alt={images[2].title} />
            </div>
            <div className="image">
                <img src={images[3].img} alt={images[3].title} />
            </div>
            <div className="image">
                <img src={images[4].img} alt={images[4].title} />
            </div>
            <div className="image">
                <img src={images[5].img} alt={images[5].title} />
            </div>
            <div className="image">
                <img src={images[6].img} alt={images[6].title} />
            </div>
        </div>
    </section>
  )
}

export default Gallery