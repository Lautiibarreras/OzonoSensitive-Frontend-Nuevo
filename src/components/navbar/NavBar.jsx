import { useRef } from "react";
import "./NavBar.css";
import LogoMenu from "../../img/LogoMenu.png";
import LogoSinNombreSinFondo from "../../img/LogoSinNombreSinFondo.png";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function NavBar() {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  
  const { loginWithRedirect } = useAuth0();
  };

  return (
    <header>
      <img src={LogoSinNombreSinFondo} alt="Logo" className="LogoNav" />
      <nav ref={navRef}>
        <a href="/#">Inicio</a>
        <a href="/#">Productos</a>
        <a href="/#">Ubicacion</a>
        <a href="/#">Contacto</a>

          <Link to="/carrito">
              <span className="material-symbols-outlined">shopping_cart</span>
          </Link>
            <button onClick={loginWithRedirect}>
              <span className="material-symbols-outlined">account_circle</span>
            </button>

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
