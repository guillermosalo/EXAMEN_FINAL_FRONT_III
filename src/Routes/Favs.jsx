import React from "react";
import Card from "../Components/Card";
import { useState } from "react";
import { useEffect } from "react";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const [fav, setFav] = useState({favs: []});
  useEffect(()=> {
    const favs = JSON.parse(localStorage.getItem("favs"));
    setFav(favs);
  }, []);

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {fav.favs.map((item) =>(
           <Card key= {item.id} id={item.id} name={item.name} username={item.username}></Card>
        ))}
      </div>
    </>
  );
};

export default Favs;
