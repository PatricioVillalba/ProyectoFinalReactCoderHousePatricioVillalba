import { createContext, useState } from "react";

// Creamos el contexto
export const CartContext = createContext();

// Creamos el proveedor del contexto
export const CartProvider = ({ children }) => {
  const prod1 = {
    id: "22",
    nombre: "produxto x",
    descripcion:
      "Originally, Blink use fallback fonts if the font loading isn't finished in 3 seconds. But this timeout value wasn't defined in any spec. Blink changes this timeout adaptively to improve performance on slow connections.",
    imagen: "https://edit.org/es/portadas-libros",
    stock: "3",
    cantidad: "1",
  };
  const prod2 = {
    id: "23",
    nombre: "el camino de la miseria",
    descripcion:
      "Las imágenes pueden estar sujetas a derechos de autor. Más información",
    imagen: "https://www.adobe.com/es/express/create/cover/book",
    stock: "7",
    cantidad: "2",
  };

  const [cartItems, setCartItems] = useState([prod1, prod2]);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};
