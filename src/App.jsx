import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import {routes} from './Routes';
import {Routes, Route} from 'react-router-dom';
import Home from "./Routes/Home";
import Card from "./Components/Card";
import Favs from "./Routes/Favs";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import NotFound from "./Routes/NotFound";
import axios from "axios";
import { useState, useEffect } from "react";


function App() {
  const [data, setData] = useState([])
  const url = 'https://jsonplaceholder.typicode.com/users'
  
  useEffect(() => {
    axios(url)
    .then(res => setData(res.data))
    
  }, [])


  return (
      <>
      <Routes>
          <Route path={routes.home} element={<Home data={data}/>}>
            <Route path={routes.detail} element={<Detail data={data}/>}>
                <Route path='/dentist/:id' element={<Card/>}/>
            </Route>
            <Route path={routes.favs} element={<Favs/>}/>
            <Route path={routes.contact} element={<Contact/>}/>
          </Route>   
          <Route path='*' element={<NotFound/>}/>  
      </Routes>

      <Navbar/>
      <Footer/>
      </>
  );
}

export default App;