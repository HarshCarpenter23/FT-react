import React from 'react';

function ProductList({ products, addToCart }) {
  return (
    <div className="list">
      {products.map((product) => (
        <div key={product.id} className="item">
          <img src={product.image} alt={product.name} />
          <div className="title">{product.name}</div>
          <div className="price">₹{product.price.toLocaleString()}</div>
          <button onClick={() => addToCart(product)}>Add To Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;