import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useEffect } from 'react';
import { useEstadosGlobales } from '../Components/utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
// Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
//aqui deberan renderizar la informacion en detalle de un user en especifico
//Deberan mostrar el name - email - phone - website por cada user en especifico

const Detail = () => {
  const {id} = useParams();
  const [dentist, setDentist] = useState([]);
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;
  useEffect(() => {
    axios(url)
    .then((res) => setDentist([res.data]));
  }, []);

  return (
    <>
      <h1>Datos del Dentista</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {dentist.map((dentist) => (
            <tr key={dentist.id}>
              <td>{dentist.name}</td>
              <td>{dentist.email}</td>
              <td>{dentist.phone}</td>
              <td>{dentist.website}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Detail