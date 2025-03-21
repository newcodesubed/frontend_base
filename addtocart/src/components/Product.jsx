import React from "react";

function Product({ product, onSelection }) {
  // const [quantity, setQuantity] = useState(0);
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h2 className="product-name">{product.name}</h2>
      <p className="product-price">${product.price}</p>
      <div className="quantity-selector"></div>
      <button className="cart-btn" onClick={() => onSelection(product)}>
        Add to Cart
      </button>
    </div>
  );
}
export default Product;
