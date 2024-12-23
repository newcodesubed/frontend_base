import React, { useState } from "react";
function Product() {
  const [quantity, setQuantity] = useState(0);
  return (
    <div className="product-card">
      <img
        src="https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/8f8ca525-0790-4d90-a069-5271abd3f744/NIKE+JOURNEY+RUN.png"
        alt="Nike Journey Run"
        className="product-image"
      />
      <h2 className="product-name">Nike Journey Run</h2>
      <p className="product-price">$90</p>
      <div className="quantity-selector">
        <button
          onClick={() => {
            if (quantity > 0) {
              setQuantity(quantity - 1);
            }
          }}
          className="quantity-btn"
        >
          -
        </button>
        <span className="quantity">{quantity}</span>
        <button
          onClick={() => {
            setQuantity(quantity + 1);
          }}
          className="quantity-btn"
        >
          +
        </button>
      </div>
    </div>
  );
}
export default Product;
