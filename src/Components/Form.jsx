import React, { useEffect } from "react";
import { useState } from "react";

const Form = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    questions: "",
  });

  const [errors, setErrors] = useState(false)
  const [message, setMessage] = useState(false)

  const validaciones = () =>{
    const emailTest = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
    if(user.name.length >= 5 || !emailTest.test(user.email)){
      setErrors(true)
    } else {
      setMessage(true)
    }
  }

  const onSubmit = (e) => {
    e.preventDefault();
    validaciones()
  }

  return (
    <>
        <form action="/registro" onSubmit={onSubmit}>
          <input
            value={[user.name]}
            type="text"
            name="Name"
            placeholder="Name"
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            required
            />
          <input
            value={[user.email]}
            type="text"
            name="email"
            placeholder="Email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <textarea 
            value={[user.questions]}
            type="textarea"
            name="questions"
            placeholder="Questions"
            onChange={(e) => setUser({ ...user, questions: e.target.value })}>
          </textarea>
          <button type="submit">Send</button>
          {errors && 'Por favor verifique su información nuevamente'}
          {message && `Gracias ${user.name}, te contactaremos cuando antes vía mail`}
        </form>
    </>
  );
};

export default Form;
