import { createContext, useContext, useEffect, useState, useReducer, useMemo } from "react";
import axios from "axios";
import { reducerTheme, reducerFav } from "./reducer";

export const initThemeState = { theme: ''};
export const initFavState = {data:[]}
export const ContextGlobal = createContext();
export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  
  const [dentist, setDentist] = useState([])
  const url = 'https://jsonplaceholder.typicode.com/users'
  const [stateFav, dispatchFav] = useReducer(reducerFav, initFavState);
  
  const [stateTheme, dispatchTheme] = useReducer(reducerTheme, initThemeState);

  useEffect(() => {
    axios(url)
    .then((res) => setDentist(res.data));
  }, [])

  const providerValue = useMemo(() => ({
    dentist, setDentist, stateFav, dispatchFav, stateTheme, dispatchTheme}),
    [dentist, setDentist, stateFav, dispatchFav, stateTheme, dispatchTheme]
  );

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(stateFav));
  }, [stateFav]); 

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