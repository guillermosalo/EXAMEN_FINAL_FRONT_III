import React from 'react'
import { useEstadosGlobales } from './utils/global.context'


const Footer = () => {
  const {providerValue} = useEstadosGlobales();
  const {stateTheme} = providerValue;


  return (
    <footer className= {stateTheme.theme}>
        <p id='footerTitle'>Powered by</p>
        <img src="./images/DH.png" alt='DH-logo' />

        <img
        className="redes"
        src="/images/ico-instagram.png"
        alt="Instagram"
      />

      <img
        className="redes"
        src="/images/ico-facebook.png"
        alt="Facebook"
      />

      <img className="redes" src="/images/ico-tiktok.png" alt="Tiktok" />

      <img
        className="redes"
        src="/images/ico-whatsapp.png"
        alt="Whatsapp"
      />
    </footer>
  )
}

export default Footer
