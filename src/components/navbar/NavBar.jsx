import { useRef } from "react";
import "./NavBar.css";
import LogoMenu from "../../img/LogoMenu.png";
import LogoSinNombreSinFondo from "../../img/LogoSinNombreSinFondo.png";
import { Link } from "react-router-dom";


function NavBar() {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };



  return (
    <header>
      <img src={LogoSinNombreSinFondo} alt="Logo" className="LogoNav" />
      <nav ref={navRef}>
        <Link to="/inicio">
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
        <a>
          <span className="material-symbols-outlined">account_circle</span>
        </a>

        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
          <img src={LogoMenu} alt="" />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavBar}>
        X
      </button>
    </header>
  );
}

export default NavBar;
