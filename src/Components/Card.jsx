import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Card = ({ id, name, username }) => {
const { idCard } = useParams()

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card">
      <Link>
          <img src= './public/images/doctor.jpg' alt= 'dentista'/>
          <h3>{id}</h3>
          <h3>{username}</h3>
          <h3>{name}</h3>
       </Link>

        
       

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
