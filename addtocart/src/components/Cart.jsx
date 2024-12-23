function Cart({ products }) {
  return (
    <div className="order-table-container">
      <h2 className="table-heading">Order Details</h2>
      <table className="order-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((order, index) => (
            <tr key={order.id}>
              <td>{index + 1}</td>
              <td>
                <img
                  src={order.image}
                  alt={order.name}
                  className="product-image"
                />
              </td>
              <td>{order.name}</td>
              <td>${order.price.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Cart;
