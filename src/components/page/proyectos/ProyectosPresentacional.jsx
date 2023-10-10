import { Tarjeta } from "../../common/card/Tarjeta";
import "./Proyectos.css";

export const ProyectosPresentacional = ({ proyecto }) => {
  return (
    <div className="tarjeta-proyecto">
      {proyecto.map((elemento) => {
        return <Tarjeta key={elemento.id} elemento={elemento} />;
      })}
    </div>
  );
};
