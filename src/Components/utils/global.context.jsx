import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

export const initialState = {theme: "", data: []}
export const ContextGlobal = createContext();
export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  
  const [data, setData] = useState([])
  const url = 'https://jsonplaceholder.typicode.com/users'
  
  useEffect(() => {
    axios(url)
    .then(res => setData(res.data))
  
  }, [])

  return (
    <ContextGlobal.Provider value={{
      data,
      setData
    }}>
      {children}
    </ContextGlobal.Provider>
  );

};

export default ContextProvider;

export const useEstadosGlobales = () => {
  return useContext(ContextGlobal)
}