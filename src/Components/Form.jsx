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

  // const [message, setMessage] = useState({
  //   errorMessage: "",
  //   succesMessage: "",
  //   numberMessage: null,
  // });

  // const messages = {
  //   0: "",
  //   1: "Name is empty",
  //   2: "Name doesn't accept characters",
  //   3: "Name needs at least 4 letters",
  //   4: "Email is empty",
  //   5: "Email is invalid",
  //   6: " we received your information and we're going to contact you",
  // };

  // //Regex
  // const emailRegex =
  // /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
  // const NameRegex =
  //   /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;

  //validaciones

  // const onSubmit = (e) => {
  //   e.preventDefault();

  //   if (user.name.length <= 0) {
  //     return setMessage((prev) => ({ ...prev, errorMessage: messages[1] }));
  //   }
  //   else if (!user.Name.match(NameRegex)) {
  //     return setMessage((prev) => ({ ...prev, errorMessage: messages[2] }));
  //   } else if (user.Name.length <= 3) {
  //     return setMessage((prev) => ({ ...prev, errorMessage: messages[3] }));
  //   }
  //   else if (user.email.length <= 0) {
  //     return setMessage((prev) => ({ ...prev, errorMessage: messages[4] }));
  //   } else if (!user.email.match(emailRegex)) {
  //     return setMessage((prev) => ({ ...prev, errorMessage: messages[5] }));
  //   } else {
  //     setMessage((prev) => ({ ...prev, succesMessage: messages[6] }));
  //     setMessage((prev) => ({ ...prev, numberMessage: 6 }));
  //     setUser((prev) => ({ ...prev, questions: user.name }));
  //     setMessage((prev) => ({ ...prev, errorMessage: messages[0] }));
  //     setUser((prev) => ({ ...prev, name: messages[0] }));
  //     setUser((prev) => ({ ...prev, email: messages[0] }));
  //   }
  // };

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
          {/* <input
            value={[user.questions]}
            type="textarea"
            name="questions"
            placeholder="Questions"
            onChange={(e) => setUser({ ...user, questions: e.target.value })}
          /> */}
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
