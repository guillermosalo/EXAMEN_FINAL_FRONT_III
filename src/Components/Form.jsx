import React from "react";
import { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [name, setName] = useState('')

  return (
    <div>
      <form ation=''>
        <input type="text" value= {name} onChange={(e) => setName(e.target.value)} />
        <input type="email" />
      </form>
    </div>
  );
};

export default Form;
