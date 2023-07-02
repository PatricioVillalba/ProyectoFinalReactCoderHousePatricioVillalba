import "./App.css";

// import { collection, query, where, getDocs } from "firebase/firestore";
// import { db } from "./firebase/firebaseConfig";
// import { useState } from "react";
// import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React from "react";
// componentes
import CardProducto from "./components/cardProducto/cardProducto";
import NavBar from "./components/NavBar/NavBar";
// vistas
import HomePage from "./Views/HomePage";
import FormPage from "./Views/FormPage";
import CarritoPage from "./Views/CarritoPage";

import { CartProvider } from "./contexts/CartContext ";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          {/* <Header /> */}
          <CartProvider>
            <NavBar />
            <Routes>
              {<Route path="/" element={<HomePage />} />}
              {<Route path="/formulario" element={<FormPage />} />}
              {<Route path="/carrito" element={<CarritoPage />} />}
            </Routes>
          </CartProvider>
        </Router>
      </div>
    );
  }
}
export default App;
