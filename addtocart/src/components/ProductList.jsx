import Product from "./Product";

function ProductList({ products, onSelection, selectedSaman }) {
  return (
    <div className="product-list">
      {products.map((product) => (
        <Product
          product={product}
          key={product.id}
          onSelection={onSelection}
          selectedSaman={selectedSaman}
        />
      ))}
    </div>
  );
}
export default ProductList;
