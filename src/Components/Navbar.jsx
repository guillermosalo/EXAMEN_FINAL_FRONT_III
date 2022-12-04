import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { routes } from '../Routes'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const navigate = useNavigate()

  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
            
      {/* <button onClick={()=> navigate(-1)}>☚ Back</button> */}
      <Link to= {routes.home}>Home</Link>{""}
      <Link to= {routes.contact}>Contacto</Link>{""}
      <Link to= {routes.favs}>Favoritos</Link>{""}
      <button>Change theme</button>
      
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      
    </nav>
  )
}

export default Navbar