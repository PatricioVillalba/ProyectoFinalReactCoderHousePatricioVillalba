import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const CardProducto = ({ producto }) => {
  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          //   height="200"
          image={producto.imagen}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="" component="div">
            {producto.nombre}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ${producto.precio.toFixed(2)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Typography variant="body2" color="text.secondary">
         ({producto.stock} disponibles)
        </Typography>
      </CardActions>
    </Card>
  );
};

export default CardProducto;
