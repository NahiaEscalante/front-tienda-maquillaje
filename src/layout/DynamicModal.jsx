import React from "react";
import { useNavigate } from "react-router-dom"; // Importa el hook de navegación
import "../DynamicModal.css";

function DynamicModal() {
  const navigate = useNavigate();

  const menuItems = [
    { name: "Rostro", route: "/rostro" },
    { name: "Ojos", route: "/ojos" },
    { name: "Labios", route: "/labios" },
    { name: "Cejas y pestañas", route: "/cejas-y-pestanas" },
  ];

  const handleNavigation = (route) => {
    navigate(route);
  };

  return (
    <div>
      {/* Barra de Navegación */}
      <nav className="dynamic-menu">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className="menu-item"
            onClick={() => handleNavigation(item.route)} 
          >
            {item.name}
          </button>
        ))}
      </nav>
    </div>
  );
}

export default DynamicModal;
