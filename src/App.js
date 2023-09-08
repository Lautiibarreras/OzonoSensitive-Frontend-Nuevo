import './App.css';
import LoginBoton from "./components/login/LoginBoton";
import Perfil from "./components/perfil/Perfil";
import LogOutBoton from "./components/logout/LogOutBoton";
import NavBar from "./components/navbar/NavBar";
import Slider from './components/slider/slider.jsx';
import Productos from './components/productos/productos.jsx'
import Carrito from './components/carrito/carrito.jsx';

import { useAuth0 } from "@auth0/auth0-react";



function App() {

  const {isAuthenticated, isLoading} = useAuth0();
  
  if (isLoading) return <h1>Loading...</h1>

  return (
    <div className='App'>
      <NavBar></NavBar>
      <Slider></Slider>
      <Productos></Productos>
      <Carrito></Carrito>
      {isAuthenticated ? <LogOutBoton></LogOutBoton> : <LoginBoton></LoginBoton>}
      
      <Perfil></Perfil>

    </div>
  );
}

export default App