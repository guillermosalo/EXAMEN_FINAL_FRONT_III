import React from "react";
import Card from "../Components/Card";
import { useState } from "react";
import { useEffect } from "react";
import { useEstadosGlobales } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  
  const { providerValue } = useEstadosGlobales();
  const { stateFav, dispatchFav } = providerValue;
  
  const [fav, setFav] = useState([]);
  useEffect(() => {
    const data= JSON.parse(localStorage.getItem('data'));
    setFav(...fav, data.data);
  },[]);

  const deleteLocal = () => {
    localStorage.removeItem('data');
  };

  const handleDeleteAll = (e) => {
    e.preventDefault();
    deleteLocal();
    dispatchFav({
      type: 'REMOVE_ALL_FAV',
    });
    setFav([]);
  }


  return (
    <>
      <h1>Dentistas Favoritos</h1>
      <button onClick={handleDeleteAll}>Borrar Todos</button>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {fav.map((item, index) =>(
           <Card key= {index} id={item.id} name={item.name} username={item.username}></Card>
        ))}
      </div>
    </>
  );
};

export default Favs;
