import React from 'react'
import { useEstadosGlobales } from './utils/global.context'


const Footer = () => {
  const {providerValue} = useEstadosGlobales();
  const {stateTheme} = providerValue;


  return (
    <footer className= {stateTheme.theme}>
        <p>Powered by</p>
        <img src="./images/DH.png" alt='DH-logo' />
    </footer>
  )
}

export default Footer
