import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useReducer } from "react";
import { useMemo } from "react";
import { reducerFav } from "./reducer";

export const initFav = {favs: []};
export const ContextGlobal = createContext();
export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  
  const [dentist, setDentist] = useState([])
  const url = 'https://jsonplaceholder.typicode.com/users'
  
  useEffect(() => {
    axios(url)
    .then((res) => setDentist(res.data));
  }, [])

  const [state, dispatch] = useReducer(reducerFav, initFav);

  const providerValue = useMemo(
    () => ({dentist, setDentist, state, dispatch}),
    [dentist, setDentist, state, dispatch]
  );

  return (
    <ContextGlobal.Provider value={{
      providerValue
    }}>
      {children}
    </ContextGlobal.Provider>
  );

};

export default ContextProvider;

export const useEstadosGlobales = () => {
  return useContext(ContextGlobal)
}