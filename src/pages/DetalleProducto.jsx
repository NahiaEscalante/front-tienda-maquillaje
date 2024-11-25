import React from "react";
import { useLocation } from "react-router-dom";
import "../DetalleProducto.css";

const DetalleProducto = () => {
  const location = useLocation();
  const product = location.state?.product;

  if (!product) {
    return <p>Producto no encontrado</p>; // Mensaje de error si no hay datos
  }

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} className="product-image" />
      <h1>{product.name}</h1>
      <h3>{product.brand}</h3>
      <p className="price">{product.newPrice}</p>
      <p className="details">{product.details}</p>
      <div className="reviews">
        <h4>Reseñas:</h4>
        <ul>
          <li>¡Excelente producto!</li>
          <li>Lo uso diariamente y funciona muy bien.</li>
        </ul>
      </div>
    </div>
  );
};

export default DetalleProducto;
