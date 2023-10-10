import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import "./Tarjeta.css";
import {BsBoxArrowUpRight} from "react-icons/bs"

export const Tarjeta = ({ elemento }) => {
  return (
    <Card
      sx={{ maxWidth: 320, maxHeight: 400 }}
      style={{ backgroundColor: "rgba(172, 145, 185, 0.9)" }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={elemento.img}
          alt={elemento.title}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{ color: "white", textAlign: "center", height: "5rem" }}
          >
            {elemento.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{ display: "flex", justifyContent: "center" }}>
        <Button
          style={{
            backgroundColor: "rgba(255, 200, 221, 0.5)",
            color: "white",
            fontWeight: "600",
            gap: "0.5rem"
          }}
          size="small"
          color="primary"
          href={elemento.url}
          target="_blank"
        >
          <BsBoxArrowUpRight size="20px"/>{elemento.boton}
        </Button>
      </CardActions>
    </Card>
  );
};
