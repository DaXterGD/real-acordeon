import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/components/Header.scss";

export const Header = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <header className="header">
      <section className="header_container">
        <NavLink to="/" className="header_logo">
          logo
        </NavLink>
        <a
          href="#open"
          className="header_menu-btn"
          onClick={() => setIsActive(!isActive)}
        >
          <span
            id="open-menu"
            className={`header_burguer ${
              isActive && "header_burguer-animation"
            }`}
          ></span>
        </a>
        <nav className={`header_menu ${isActive && "header_is-active"}`}>
          <NavLink onClick={() => setIsActive(false)} to="/">Inicio</NavLink>
          <NavLink onClick={() => setIsActive(false)} to="/">Acerca</NavLink>
          <NavLink onClick={() => setIsActive(false)} to="/">Servicios</NavLink>
          <NavLink onClick={() => setIsActive(false)} to="/">Proyectos</NavLink>
          <NavLink onClick={() => setIsActive(false)} to="/">Testimonios</NavLink>
          <NavLink onClick={() => setIsActive(false)} to="/">Contacto</NavLink>
        </nav>
      </section>
    </header>
  );
};

export default Header;
