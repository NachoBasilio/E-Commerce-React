import React from 'react'
import carritoIMG from '../assets/static/carrito.png'
import volverIMG from '../assets/static/volver.png'

export default function Header() {
  return (
    <>
        <a href=""><img src={carritoIMG} alt="" className="carritou"/></a>
        <a href=""><img src={volverIMG} alt="" className="volver"/></a>

        <h1 className="titulo">
          Dev <br />
          RockStore
        </h1>
    </>
  )
}
