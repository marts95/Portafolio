import { Tarjeta } from "../../common/card/Tarjeta";
import "./Certificados.css";

export const CertificadosPresentacional = ({certificado}) => {
  return (
    <div className="tarjeta-certificado">
      {certificado.map((elemento) => {
        return <Tarjeta key={elemento.id} elemento={elemento} />;
      })}
    </div>
  );
}
