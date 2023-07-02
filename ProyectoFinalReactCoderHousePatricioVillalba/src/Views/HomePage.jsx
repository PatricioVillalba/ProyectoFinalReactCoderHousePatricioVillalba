import { useContext } from "react";
import { CartContext } from "../contexts/CartContext ";

const Home = () => {
  const { cartItems, setCartItems } = useContext(CartContext);

  const agregarProducto = () => {
    const nuevoProducto = {
      id: "22",
      nombre: "produxto x",
      // Resto de propiedades del nuevo producto
    };
    // const nuevoProducto = "elemento3";

    // setCartItems([...cartItems, nuevoProducto]);
    setCartItems((prevElementos) => prevElementos.concat(nuevoProducto));
  };

  return (
    <div>
      <h1>Home</h1>
      <p>Cantidad de productos en el carrito: {cartItems.length}</p>
      {cartItems.map((elemento, index) => (
        <li key={index}>{elemento["id"]}</li>
      ))}
      <button onClick={agregarProducto}>Agregar producto</button>
    </div>
  );
};

export default Home;
