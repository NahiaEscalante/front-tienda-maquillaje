import React from "react";
import { useParams } from "react-router-dom";
import ProductList from "../components/ProductList";

const products = [
  {
    id: 1,
    image: "https://via.placeholder.com/500x500",
    brand: "Rare Beauty",
    name: "Soft Pinch Tinted Lip Oil",
    price: "S/. 163.90 - S/. 169.90",
    category: "labios",
    availability: "Disponible",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/500x500",
    brand: "NYX Professional Makeup",
    name: "Fat Oil Lip Drip",
    price: "S/. 109.90",
    category: "labios",
    availability: "Disponible",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/500x500",
    brand: "Byoma",
    name: "Milky Oil Cleanser",
    price: "S/. 135.90",
    category: "rostro",
    availability: "Disponible",
  },
  {
    id: 4,
    image: "https://via.placeholder.com/500x500",
    brand: "Sol de Janeiro",
    name: "Brazilian Joia Milky Leave In Conditioner",
    price: "S/. 89.90 - S/. 229.90",
    category: "cabello",
    availability: "Agotado",
  },
];

const CategoriaPage = () => {
  const { categoria } = useParams(); // Obtiene el parámetro de la categoría
  const filteredProducts = products.filter(
    (product) => product.category === categoria
  );

  return (
    <div className="categoria-page">
      <h1>Productos para {categoria.charAt(0).toUpperCase() + categoria.slice(1)}</h1>
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default CategoriaPage;
