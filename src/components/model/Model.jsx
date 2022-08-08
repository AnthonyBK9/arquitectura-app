import React from 'react'
import './style/model.css'
const Model = () => {
  return (
    <main className="container mt-5">
        <h2>Conoce nuestros 3 modelos</h2>
        <div className="model basico">
            <div className="model-content">
                <h3>Modelo Básico</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, repellendus nisi aut, illum sed iste magnam cumque sunt ad qui magni nemo. Consequuntur, placeat minus! Vel error praesentium omnis esse?</p>
                <a href="#" className="btn">Más Información</a>
            </div>
        </div>
        <div className="model premier">
            <div className="model-content">
                <h3>Modelo Premier</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, repellendus nisi aut, illum sed iste magnam cumque sunt ad qui magni nemo. Consequuntur, placeat minus! Vel error praesentium omnis esse?</p>
                <a href="#" className="btn">Más Información</a>
            </div>
        </div>
        <div className="model elite">
            <div className="model-content">
                <h3>Modelo Elite</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, repellendus nisi aut, illum sed iste magnam cumque sunt ad qui magni nemo. Consequuntur, placeat minus! Vel error praesentium omnis esse?</p>
                <a href="#" className="btn">Más Información</a>
            </div>
        </div>
    </main>
  )
}

export default Model