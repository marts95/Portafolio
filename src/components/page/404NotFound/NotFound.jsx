import { Link } from "react-router-dom";
import "./NotFound.css";
import { Button } from "@mui/material";

export const NotFound = () => {
  return (
    <div className="encontrar">
      <p>ESTA PÁGINA NO EXISTE</p>
      <img
        className="nena-no-se"
        src="https://res.cloudinary.com/dp8auiwtw/image/upload/v1696958632/Portafolio/reaction-confused_dwr6i6.gif"
      ></img>
      <br></br>
      <h1>Ups! La página que buscas fue movida, borrada</h1>
      <h1> o posiblemente nunca existió. </h1>
      <br></br>
      <Link to="/">
        <Button className="boton" variant="contained">
          Volver al sitio
        </Button>
      </Link>
    </div>
  );
};
