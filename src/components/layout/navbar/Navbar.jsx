import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dp8auiwtw/image/upload/v1696901841/Portafolio/logo_margarita_blanco-sin_fondo_h9bbqy.png"
            alt=""
            style={{ width: "90px" }}
          ></img>
        </Link>
        <Link to="/" className="h1">
          <h1>Desarrolladora Front-end React</h1>
        </Link>
      </div>
      <div className="navbar-menu">
        <ul className="menu-lista">
          <Link to="/" className="li">
            Inicio
          </Link>
          <Link to="/sobre" className="li">
            Sobre mí
          </Link>
          <Link to="/proyectos" className="li">
            Proyectos
          </Link>
          <Link to="/certificados" className="li">
            Certificados
          </Link>
          <Link to="/contacto" className="li">
            Contacto
          </Link>
        </ul>
      </div>
    </div>
  );
};
