import React from "react";
import { NavLink } from "react-router-dom";

import "./header.scss";

function Header() {
  return (
    <div className="container header">
      <div className="logo">
        <h1>Logo</h1>
      </div>
      <div className="menu">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/nosotros">Nosotros</NavLink>
        <NavLink to="/proveedores">Proveedores</NavLink>
        <NavLink to="/farmacovigilancia">Farmacovigilancia</NavLink>
        <NavLink to="/comprar">Comprar</NavLink>
        <NavLink to="/contact">Contacto</NavLink>
      </div>
    </div>
  );
}

export default Header;
