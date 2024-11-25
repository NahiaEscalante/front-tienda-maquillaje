import React, { useState } from "react";
import { Link } from "react-router-dom"; // Importa Link para la navegación
import "../Navbar.css";
// Importación de logos
import glow from "../assets/logos/gloww.png"; // Importa tu logo Glow
import lunavie from "../assets/logos/lunavie.png"; 
import lumiere from "../assets/logos/lumiere.png"; 


function Navbar() {
  const [navbarColor, setNavbarColor] = useState("#D4AF37"); // Color inicial
  const [bottomBarPosition, setBottomBarPosition] = useState(0); // Posición de la barra inferior
  const [logoUrl, setLogoUrl] = useState(lumiere); // Logo inicial

  const handleNavbarColorChange = (color, position, logo) => {
    setNavbarColor(color);
    setBottomBarPosition(position);
    setLogoUrl(logo); // Actualiza el logo dinámicamente
  };

  return (
    <div>
      {/* Barra Superior */}
      <div className="top-bar">
        <button
          onClick={() =>
            handleNavbarColorChange("#D4AF37", 0, lumiere) // Cambia a Lumiere
          }
          className="top-bar-btn"
        >
          Lumiere
        </button>
        <button
          onClick={() =>
            handleNavbarColorChange("#87CEEB", 1, lunavie) // Cambia a LunaVie
          }
          className="top-bar-btn"
        >
          LunaVie
        </button>
        <button
          onClick={() =>
            handleNavbarColorChange("#FFC1CC", 2, glow) // Cambia a Glow
          }
          className="top-bar-btn"
        >
          Glow
        </button>
      </div>

      {/* Contenedor de la Barra Inferior Dinámica */}
      <div className="bottom-bar-container">
        <div
          className="bottom-bar"
          style={{
            backgroundColor: navbarColor,
            transform: `translateX(${bottomBarPosition * 100}%)`,
          }}
        ></div>
      </div>

      {/* Navbar Principal */}
      <nav
        className="navbar"
        style={{ backgroundColor: navbarColor }} // Cambia el color de fondo
      >
        <div className="logo">
          <img src={logoUrl} alt="Logo" /> {/* Logo dinámico */}
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Buscar producto" />
          <button className="search-icon">&#128269;</button>
        </div>
        <div className="menu-links">
          <Link to="/auth/login">Inicia sesión</Link> {/* Navega a /auth/login */}
          <span>Mis compras</span>
          <span>&#9825;</span>
          <span>&#128722;</span>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
