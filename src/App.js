import { Routes, Route } from 'react-router-dom';
import Home from './Routes/home/home.component.jsx'
import Navigation from './Routes/navigation/navigation.component.jsx';
import SignIn from './Routes/signIn/signIn.component.jsx';


const Shop =()=>{
  return(
    <div>
      <h1>I am shop page</h1>
    </div>
  )
}

const App = () => {
 
  return (
    <Routes>
    <Route path='/' element={<Navigation/>}>
      <Route index element={<Home />} />
      <Route path='shop' element={<Shop/>}/>
      <Route path='signin' element={<SignIn/>}/>
    </Route>
   
    </Routes>
  );
};

export default App;