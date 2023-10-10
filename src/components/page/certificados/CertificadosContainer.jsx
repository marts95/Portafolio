import { useEffect, useState } from "react";
import "./Certificados.css"
import { collection, getDocs } from "firebase/firestore";
import { dataBase } from "../../../firebaseConfig";
import { CertificadosPresentacional } from "./CertificadosPresentacional";
import { CircleLoader } from "react-spinners";

export const CertificadosContainer = () => {
  const [certificado, setCertificado] = useState([]);

  useEffect(() => {
    let certificadosColeccion = collection(dataBase, "certificados");

    getDocs(certificadosColeccion)
      .then((respuesta) => {
        let proyectos = respuesta.docs.map((elemento) => {
          return {
            id: elemento.id,
            ...elemento.data(),
          };
        });
        setCertificado(proyectos);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {certificado.length > 0 ? (
        <CertificadosPresentacional certificado={certificado} />
      ) : (
        <div className="loader">
          <CircleLoader
            className="loader-logo"
            size="17rem"
            color="var(--main-violet)"
          />
        </div>
      )}
    </div>
  );
}
