import { Button } from "@mui/material";
import "./Inicio.css";
import { Link } from "react-router-dom";

export const Inicio = () => {
  return (
    <div className="inicio">
      <div className="inicio-cuerpo">
        <h1>¡Hola!</h1>
        <h3>Mi nombre es</h3>
        <h2>Marianella Torressi</h2>
        <h3> y soy </h3>
        <h2>Desarrolladora Front-end React</h2>
        <div className="botones">
          <Link to="/sobre">
            <Button className="boton-conocer" variant="contained">
              Conóceme
            </Button>
          </Link>
          <Link to="/proyectos">
            <Button className="boton-conocer" variant="contained">
              Proyectos
            </Button>
          </Link>
          <Link to="/certificados">
            <Button className="boton-conocer" variant="contained">
              Certificados
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
