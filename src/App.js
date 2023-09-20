import "./App.css";
import LoginBoton from "./components/login/LoginBoton";
import Perfil from "./components/perfil/Perfil";
import LogOutBoton from "./components/logout/LogOutBoton";
import NavBar from "./components/navbar/NavBar";
import Slider from "./components/slider/slider.jsx";
import Productos from "./components/productos/productos.jsx";
import Carrito from "./components/carrito/carrito.jsx";
import DataProvider from "./components/Context/DataContext";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className="App">
      <DataProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <NavBar></NavBar>
                  <Slider></Slider>
                </>
              }
            />
            <Route
              path="/carrito"
              element={
                <>
                  <NavBar></NavBar>
                  <Carrito></Carrito>
                </>
              }
            />
            <Route
              path="/productos"
              element={
                <>
                  <NavBar></NavBar>
                  <div className="productos-card-container">
                    <Productos></Productos>
                  </div>
                </>
              }
            />
          </Routes>
        </BrowserRouter>

        {isAuthenticated ? (
          <LogOutBoton></LogOutBoton>
        ) : (
          <LoginBoton></LoginBoton>
        )}

        <Perfil></Perfil>
      </DataProvider>
    </div>
  );
}

export default App;
