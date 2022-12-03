import React from 'react'
import { Outlet } from 'react-router-dom'
import Card from '../Components/Card'
import {Link, useNavigate} from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = ({data}) => {

  return (
    
    <main className="" >
      <Outlet/>
      
      <h1>Home</h1>

      <div className='card-grid'>
      {data.map(item=> <Card key={item.id} data={data}/>)}
        {/* Aqui deberias renderizar las cards */}
        
      </div>
    </main>
  )
}

export default Home