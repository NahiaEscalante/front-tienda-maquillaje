import React, { useState } from "react";
import Reviews from "../components/Reviews";
import "../DetalleProducto.css";

const DetalleProducto = () => {
  const [selectedImage, setSelectedImage] = useState(
    "https://via.placeholder.com/500x500"
  );

  const productDetails = {
    name: "Sephora Favorites Bold and Blushing Blush and Lip Set",
    price: "S/. 265.00",
    availability: "Agotado",
    description:
      "El 2024, sin duda, ha sido el año de los lippies y blushes ✨ Este set contiene los labiales y blushes seleccionados por Sephora que necesitas probar:\n\n" +
      "- Summer Fridays Lip Butter Balm for Hydration & Shine en tono Iced Coffee de tamaño mini\n" +
      "- PATRICK TA Mini Major Volume Plumping Lip Gloss en tono 2CC de tamaño mini\n" +
      "- PAT McGRATH LABS LUST: Lip Gloss en tono Aliengelic de tamaño mini\n" +
      "- Danessa Myricks Beauty Yummy Skin Blurring Balm Powder Flushed Matte Color for Cheek & Lip en tono Rose and Brunch de tamaño completo\n" +
      "- LAWLESS Pinch My Cheeks Soft-Blur Cream Blush en tono Angel de tamaño completo\n" +
      "- REFY Lip Blush en tono Wine de tamaño completo",
    images: [
      "https://via.placeholder.com/500x500",
      "https://via.placeholder.com/500x500?text=Image2",
      "https://via.placeholder.com/500x500?text=Image3",
    ],
    reviews: [
      {
        user: "Ana",
        comment: "¡Me encanta este set! Los colores son hermosos.",
        rating: 5,
      },
      {
        user: "María",
        comment: "El blush es mi favorito. Totalmente recomendado.",
        rating: 4,
      },
    ],
  };

  return (
    <div className="detalle-producto-container">
      <div className="product-gallery">
        <img
          src={selectedImage}
          alt="Producto"
          className="main-product-image"
        />
        <div className="thumbnail-container">
          {productDetails.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Producto ${index + 1}`}
              className={`thumbnail ${
                selectedImage === image ? "active-thumbnail" : ""
              }`}
              onClick={() => setSelectedImage(image)}
            />
          ))}
        </div>
      </div>
      <div className="product-info">
        <h1 className="product-name">{productDetails.name}</h1>
        <p className="product-price">{productDetails.price}</p>
        <p className="product-availability">{productDetails.availability}</p>
        <div className="quantity-container">
          <button>-</button>
          <input type="number" min="1" max="10" defaultValue="1" />
          <button>+</button>
        </div>
        <button className="add-to-cart">Comprar ahora</button>
        <p className="product-description">{productDetails.description}</p>
        {/* Componente Reviews debajo de la descripción */}
        <Reviews reviews={productDetails.reviews} />
      </div>
    </div>
  );
};

export default DetalleProducto;
