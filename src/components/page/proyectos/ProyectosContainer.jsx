import { useEffect, useState } from "react";
import "./Proyectos.css";
import { collection, getDocs } from "firebase/firestore";
import { dataBase } from "../../../firebaseConfig";
import { ProyectosPresentacional } from "./ProyectosPresentacional";
import CircleLoader from "react-spinners/CircleLoader";

export const ProyectosContainer = () => {
  const [proyecto, setProyecto] = useState([]);

  useEffect(() => {
    let proyectoColeccion = collection(dataBase, "proyectos");

    getDocs(proyectoColeccion)
      .then((respuesta) => {
        let proyectos = respuesta.docs.map((elemento) => {
          return {
            id: elemento.id,
            ...elemento.data(),
          };
        });
        setProyecto(proyectos);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {proyecto.length > 0 ? (
        <ProyectosPresentacional proyecto={proyecto} />
      ) : (
        <div className="loader">
          <CircleLoader className="loader-logo" size="17rem" color="var(--main-violet)" />
        </div>
      )}
    </div>
  );
};
