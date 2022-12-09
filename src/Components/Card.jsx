import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useEstadosGlobales } from "./utils/global.context";

const Card = ({ name, username, id }) => {
const { providerValue } = useEstadosGlobales();
const {stateFav, dispatchFav} = providerValue;

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    dispatchFav({
      type: "ADD_FAV",
      payload: {name, username, id},
    });
    alert("AÑADIDO A FAVORITOS");
  };

  return (
    <div className="card">
      <Link key={id} to={`/dentist/${id}`}>
          <img src= '/images/doctor.jpg' alt= 'dentist'/>
          <h3>{name}</h3>
          <h3>{username}</h3>
      </Link>     
       
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
