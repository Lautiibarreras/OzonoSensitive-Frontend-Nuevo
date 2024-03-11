import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import LogoMenu from "../../img/LogoMenu.png";
import LogoSinNombreSinFondo from "../../img/LogoSinNombreSinFondo.png";
import SearchAppBar from "./SearchAppBar"; // Import the SearchAppBar component

function NavBar() {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <img src={LogoSinNombreSinFondo} alt="Logo" className="LogoNav" />
      <nav ref={navRef}>
        <Link to="/">
          <a>Inicio</a>
        </Link>
        <Link to="/productos">
          <a>Productos</a>
        </Link>
        <a>Ubicacion</a>
        <a>Contacto</a>
        

        <Link to="/carrito">
          <span className="material-symbols-outlined">shopping_cart</span>
        </Link>
        <Link to="/formLogin">
          <span className="material-symbols-outlined">account_circle</span>
        </Link>


        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
          <img src={LogoMenu} alt="" />
        </button>
      </nav>
      
      <button className="nav-btn" onClick={showNavBar}>
        X
      </button>
      <SearchAppBar />
    </header>
  );
}

export default NavBar;
