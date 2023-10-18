import { Link } from "react-router-dom";
import "./Navbar.css";
import React from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import { BiMenuAltLeft } from "react-icons/bi";

export const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <div className="navbar">
        <div className="hamburguesa">
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            className="hamburguesa-boton"
          >
            <BiMenuAltLeft />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose} className="basic-menu">
              <Link
                to="/"
                style={{
                  color: "var(--main-violet)",
                  fontSize: "1.5rem",
                  fontWeight: 600,
                  textDecoration: "underline transparent",
                  transition: "text-decoration 0.3s ease",
                }}
              >
                Inicio
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link
                to="/sobre"
                style={{
                  color: "var(--main-violet)",
                  fontSize: "1.5rem",
                  fontWeight: 600,
                  textDecoration: "underline transparent",
                  transition: "text-decoration 0.3s ease",
                }}
              >
                Sobre mí
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link
                to="/proyectos"
                style={{
                  color: "var(--main-violet)",
                  fontSize: "1.5rem",
                  fontWeight: 600,
                  textDecoration: "underline transparent",
                  transition: "text-decoration 0.3s ease",
                }}
              >
                Proyectos
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link
                to="/certificados"
                style={{
                  color: "var(--main-violet)",
                  fontSize: "1.5rem",
                  fontWeight: 600,
                  textDecoration: "underline transparent",
                  transition: "text-decoration 0.3s ease",
                }}
              >
                Certificados
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link
                to="/contacto"
                style={{
                  color: "var(--main-violet)",
                  fontSize: "1.5rem",
                  fontWeight: 600,
                  textDecoration: "underline transparent",
                  transition: "text-decoration 0.3s ease",
                }}
              >
                Contacto
              </Link>
            </MenuItem>
          </Menu>
        </div>
        <div className="navbar-logo">
          <Link to="/">
            <img
              src="https://res.cloudinary.com/dp8auiwtw/image/upload/v1696901841/Portafolio/logo_margarita_blanco-sin_fondo_h9bbqy.png"
              alt=""
            ></img>
          </Link>
          <Link to="/" className="h1">
            <h1>Desarrolladora Frontend React</h1>
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
    </>
  );
};
