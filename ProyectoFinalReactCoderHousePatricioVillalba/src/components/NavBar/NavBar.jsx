//crear con rafc
import React from 'react';
// import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark sticky-top">
    <div className="container-fluid">
      {/* <Link to="/" className="navbar-brand" aria-current="page">Mi tienda</Link> */}
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse my-2 justify-content-end my-md-0 text-small" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            {/* <Link to="/" className="nav-link" aria-current="page">Inicio</Link> */}
          </li>
          <li className="nav-item">
          {/* <Link to="/CategoriaPage" className="nav-link" aria-current="page">Categorias</Link> */}
          </li>
          <li className="nav-item">
          {/* <Link to="/" className="nav-link" aria-current="page">Inicio</Link> */}
          </li>
          <li>
            {/* <CartWidget numero="4"/> */}
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}


export default NavBar
