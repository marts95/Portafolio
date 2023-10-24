import "./Sobre.css";

export const Sobre = () => {
  return (
    <div className="sobre">
      <div className="sobre-cuerpo">
        <img
          src="https://res.cloudinary.com/dp8auiwtw/image/upload/v1696634433/Portafolio/foto-sin-fondo_rvwm9i.png"
          alt="foto-cv"
          className="sobre-img"
        ></img>
        <div className="sobre-texto">
          <h1>Sobre mí</h1>
          <p>
            Mi nombre es Marianella Torressi, soy de Santiago del Estero,
            Argentina y me encuentro en busca de mi primer trabajo en el rubro
            IT. Estudié la carrera de desarrollador front-end en Coderhouse,
            donde continúo mi educación para convertirme en desarrolladora
            FullStack.
          </p>
          <br></br>
          <p>
            Desde que mi mamá me compró la colección `Aprendiendo PC Kids´ de la
            revista Genios siempre me llamó la atención la computación y de a
            poco me convertí en la `tecnológica´ de la familia. Sintiéndome
            estancada en la carrera que elegí a los 18 años y en medio de la
            búsqueda de carreras alternativas, me encontré con la posibilidad de
            estudiar e insertarme en esta industria que siempre había llamado mi
            atención.
          </p>
          <br></br>
          <p>
            Tengo experiencia utilizando HTML, CSS, SASS, JavaScript y React
            (particularmente Vite), así como también Bootstrap, Material UI,
            Sweet Alert, Formik y Yup. Me caracterizo por buscar aprender cada
            día algo nuevo y profundizar de manera constante mis conocimientos.
          </p>
        </div>
      </div>
    </div>
  );
};
