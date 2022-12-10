import React from 'react'
import Card from '../Components/Card'
import { useEstadosGlobales } from '../Components/utils/global.context'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { providerValue } = useEstadosGlobales();
  const { dentist, stateTheme } = providerValue;
  
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
      {dentist.map((item)=> (<Card key={item.id} id={item.id} name={item.name} username={item.username}></Card>))}
      </div>     
    </main>
  )
}

export default Home