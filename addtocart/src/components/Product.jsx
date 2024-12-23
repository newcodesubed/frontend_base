import React, { useState } from "react";

function Product({ product }) {
  const [quantity, setQuantity] = useState(0);
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h2 className="product-name">{product.name}</h2>
      <p className="product-price">${product.price}</p>
      <div className="quantity-selector"></div>
      <button className="cart-btn">Add to Cart</button>
    </div>
  );
}
export default Product;
