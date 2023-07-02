import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Boton from "../Boton/Boton";
import { CartContext } from "../../contexts/CartContext ";

export default function cardProducto({ producto }) {
  const { cartItems, setCartItems } = useContext(CartContext);

  const handleRestarCantidad = () => {
    const updatedCartItems = cartItems
      .map((item) => {
        // const updatedCartItems = cartItems.map((item) => {
        if (item.id === producto.id) {
          const updatedItem = { ...item, cantidad: item.cantidad - 1 };
          return updatedItem;
        }
        return item;
      })
      .filter((item) => item.cantidad > 0);
    setCartItems(updatedCartItems);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {producto.nombre.slice(0, 10)}..
        </Typography>
        Cantidad:{producto.cantidad}
      </CardContent>
      <CardActions>
        <Boton onClick={handleRestarCantidad} className="error-button">
          -
        </Boton>
        <Boton onClick={""} className="error-button">
          +
        </Boton>
      </CardActions>
    </Card>
  );
}
