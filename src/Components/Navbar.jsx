import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../Routes'
import { useEstadosGlobales } from './utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const {providerValue} = useEstadosGlobales();
  const {dispatchTheme, stateTheme} = providerValue;
  const handleChangeTheme = () => {
    stateTheme.theme === (stateTheme.theme = '')
    ? dispatchTheme({type: "THEME_DARK"})
    : dispatchTheme({type: "THEME_LIGHT"});
  };

  return (
    <nav className={stateTheme.theme}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
     
      <Link to= {routes.home}>Home</Link>{""}
      <Link to= {routes.contact}>Contacto</Link>{""}
      <Link to= {routes.fav}>Favoritos</Link>{""}
      <button onClick={handleChangeTheme}>Change theme</button>
      
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      
    </nav>
  )
}

export default Navbar