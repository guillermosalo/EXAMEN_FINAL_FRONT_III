import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../Routes'
import { useState } from 'react'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  // const [style, setStyle] = useState('dark')
  // const changeStyle = () => setStyle (<main className="dark"/>)

  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
            

      <Link to= {routes.home}>Home</Link>{""}
      <Link to= {routes.contact}>Contacto</Link>{""}
      <Link to= {routes.fav}>Favoritos</Link>{""}
      <button>Change theme</button>
      
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      
    </nav>
  )
}

export default Navbar