import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


const Card = ({ data }) => {
const { idItem } = useParams()
const itemCard=data.find(item => item.id===idItem)
console.log(itemCard);

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card">
      <Link>
          
          <h3>{itemCard?.id}</h3>
          <h3>{itemCard?.username}</h3>
          <h3>{itemCard?.name}</h3>
       </Link>
       {/* <img src="./public/images/doctor.jpg" alt="dentista" /> */}

        
       

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
