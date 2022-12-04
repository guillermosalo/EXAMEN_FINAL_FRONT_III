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

function App() {

  return (
      <>
      <Routes>
          <Route path={routes.home} element={<Home/>}>
            <Route path={routes.detail} element={<Detail/>}>
                <Route path='/dentist/:idCard' element={<Card/>}/>
            </Route>
            <Route path={routes.favs} element={<Favs/>}/>
            <Route path={routes.contact} element={<Contact/>}/>
          </Route>   
          <Route path= {routes.notfound} element={<NotFound/>}/>  
      </Routes>

      <Navbar/>
      <Footer/>
      </>
  );
}

export default App;