import { Button, TextField } from "@mui/material";
import "./Contacto.css";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";

export const ContactoPresentacional = ({
  handleChange,
  handleSubmit,
  errors,
}) => {
  return (
    <div className="contacto">
      <div className="contacto-cuerpo">
        <h1>¡Contactate conmigo por cualquier consulta!</h1>
        <div className="contacto-redes">
          <div className="cuerpo-redes">
            <div className="red1 redes">
              <a
                href="https://www.linkedin.com/in/marianellatorressi"
                target="_blank"
                rel="noreferrer"
              >
                <BsLinkedin />
                <br></br>
                <h3>Marianella Torressi</h3>
              </a>
            </div>
            <div className="red2 redes">
              <a
                href="https://twitter.com/Mar_Torressi"
                target="_blank"
                rel="noreferrer"
              >
                <FaXTwitter />
                <br></br>
                <h3> @Mar_Torressi</h3>
              </a>
            </div>
            <div className="red3 redes">
              <a
                href="https://github.com/marts95"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub />
                <br></br>
                <h3>@marts95</h3>
              </a>
            </div>
          </div>
        </div>
        <div>
          <form className="contacto-formulario" onSubmit={handleSubmit}>
            <TextField
              label="Nombre"
              variant="filled"
              name="nombre"
              onChange={handleChange}
              error={errors.nombre ? true : false}
              helperText={errors.nombre}
              className="form1 categorias"
            />
            <TextField
              label="Email"
              variant="filled"
              name="email"
              onChange={handleChange}
              error={errors.email ? true : false}
              helperText={errors.email}
              className="form2 categorias"
            />
            <TextField
              label="Mensaje"
              variant="filled"
              name="mensaje"
              multiline
              rows={10}
              onChange={handleChange}
              error={errors.mensaje ? true : false}
              helperText={errors.mensaje}
              className="form3 categorias"
            />
            <Button
              style={{
                backgroundColor: "var(--main-dark-pink)",
                color: "white",
                fontWeight: "600",
                borderRadius: "8px",
                borderColor: "transparent",
              }}
              type="submit"
              variant="contained"
              className="form4"
            >
              Enviar
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
