import { Routes, Route } from 'react-router-dom';
import Home from './Routes/home/home.component.jsx'
import Navigation from './Routes/navigation/navigation.component.jsx';
import Authentication from './Routes/authentication/authentication.component.jsx';
import Shop from "./Routes/shop/shop.component"



const App = () => {
 
  return (
    <Routes>
    <Route path='/' element={<Navigation/>}>
      <Route index element={<Home />} />
      <Route path='shop' element={<Shop/>}/>
      <Route path='auth' element={<Authentication/>}/>
    </Route>
   
    </Routes>
  );
};

export default App;