import React from 'react'
import { Outlet } from 'react-router-dom'
import Card from '../Components/Card'
import Navbar from '../Components/Navbar'
import { useEstadosGlobales } from '../Components/utils/global.context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { data } = useEstadosGlobales();
  
  return (
    
    <main className="" >
      <Navbar/>
      <h1>Home</h1>
      <Outlet/>
      <div className='card-grid'>
      {data.map(item=> <Card key={item.id} id={item.id} name={item.name} username={item.username}></Card>)}
        {/* Aqui deberias renderizar las cards */}
    
      </div>
    </main>
  )
}

export default Home