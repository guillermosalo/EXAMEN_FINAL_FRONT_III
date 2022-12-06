import {routes} from './Routes';
import {Routes, Route} from 'react-router-dom';
import Home from "./Routes/Home";
import Favs from "./Routes/Favs";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import NotFound from "./Routes/NotFound";

function App() {

  return (
      <>
      <Routes>
          <Route path={routes.home} element={<Home/>}/>
          <Route path={routes.dentist} element={<Detail/>}/>
          <Route path={routes.fav} element={<Favs/>}/>
          <Route path={routes.contact} element={<Contact/>}/>
          <Route path={routes.notfound} element={<NotFound/>}/>  
      </Routes>
      </>
  );
}

export default App;