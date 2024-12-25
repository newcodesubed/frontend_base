import Product from "./Product";

function ProductList({ products, onSelection }) {
  return (
    <div className="product-list">
      {products.map((product) => (
        <Product product={product} key={product.id} onSelection={onSelection} />
      ))}
    </div>
  );
}
export default ProductList;
