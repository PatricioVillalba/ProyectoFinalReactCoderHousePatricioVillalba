import { useContext } from "react";
import { CartContext } from "../contexts/CartContext ";
import { Link } from "react-router-dom";
import CardProducto from "../components/cardProducto/cardProducto";

const Carrito = () => {
  const { cartItems, setCartItems } = useContext(CartContext);

  //   const agregarProducto = () => {
  //     const nuevoProducto = {
  //       id: "22",
  //       nombre: "produxto x",
  //     };
  //     setCartItems((prevElementos) => prevElementos.concat(nuevoProducto));
  //   };

  return (
    <div>
      <h1>Carrito</h1>
      <div style={{ display: "flex" }}>
        {cartItems.map((producto, index) => (
          <CardProducto
            producto={producto}
            key={index}
            style={{ marginRight: "30px" }}
          />
        ))}
      </div>
      <Link to="/formulario" className="nav-link" aria-current="page">
        <button type="button" style={{ marginTop: "10px" }}>
          Confirmar Compra
        </button>
      </Link>
    </div>
  );
};

export default Carrito;
