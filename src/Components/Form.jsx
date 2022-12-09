import React from "react";
import { useState } from "react";
import useInputContact from "./utils/UseInputContact";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

    const name = useInputContact('text')
    const lastName = useInputContact('text')
    const email = useInputContact('email')
    const consulta = useInputContact('text')
    const submit = useInputContact('submit')

  return (
    <div>
      <form ation=''>
        <input {...name}/>
        <input {...lastName}/>
        <input {...email}/>
        <input {...consulta}/>
      </form>
    </div>
  );
};

export default Form;
