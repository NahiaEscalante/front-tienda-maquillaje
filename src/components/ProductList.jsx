import React from "react";
import { Link } from "react-router-dom";
import "../ProductList.css";
import productImage from "../assets/product-image.png";

// Datos de los productos
const products = [
  {
    id: 1,
    image: productImage,
    brand: "The Ordinary",
    name: "AHA 30% + BHA 2% Peeling Solution - 30mL",
    oldPrice: "S/. 99.90",
    newPrice: "S/. 89.90",
    discount: "-S/. 10.00",
    details: "Exfoliante químico para una piel más suave y luminosa.",
    reviews: ["¡Me encantó!", "Muy efectivo para pieles grasas."],
  },
  {
    id: 2,
    image: productImage,
    brand: "The Ordinary",
    name: "Ácido Salicílico 2% Solución Exfoliante",
    oldPrice: "S/. 99.90",
    newPrice: "S/. 84.90",
    discount: "-S/. 15.00",
    details: "Ayuda a limpiar los poros y reducir el acné.",
    reviews: ["Fácil de usar y con buenos resultados.", "Perfecto para mi rutina diaria."],
  },
  {
    id: 3,
    image: productImage,
    brand: "Good Molecules",
    name: "Tónico Iluminador de Niacinamida",
    oldPrice: "S/. 134.90",
    newPrice: "S/. 74.90",
    discount: "-S/. 60.00",
    details: "Reduce las manchas y mejora la textura de la piel.",
    reviews: ["Resultados visibles en pocas semanas.", "Mi piel se ve más uniforme."],
  },
  {
    id: 4,
    image: productImage,
    brand: "Tower 28 Beauty",
    name: "SOS Daily Rescue Facial Spray",
    oldPrice: "S/. 209.90",
    newPrice: "S/. 109.90",
    discount: "-S/. 100.00",
    details: "Calma y repara la piel sensible.",
    reviews: ["Perfecto para piel irritada.", "Un básico en mi cuidado diario."],
  },
];

const ProductList = () => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          {/* Descuento visible en la esquina */}
          <div className="discount">{product.discount}</div>
          {/* Enlace al detalle del producto, pasando datos con state */}
          <Link to={`/product/${product.id}`} state={{ product }}>
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
          </Link>
          <h4 className="brand">{product.brand}</h4>
          <p className="name">{product.name}</p>
          <div className="prices">
            <span className="old-price">{product.oldPrice}</span>
            <span className="new-price">{product.newPrice}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
