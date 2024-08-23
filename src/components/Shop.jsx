import React, { useState } from 'react';
import ProductList from './ProductList';
import ShoppingCart from './ShoppingCart';
import Navbar from './Navbar';
import './Shop.css';

const products = [
  {
    id: 1,
    name: "Dark Bites",
    image: "https://img.freepik.com/free-photo/chocolate-truffles-with-cocoa-powder_23-2148019567.jpg?t=st=1724014936~exp=1724018536~hmac=5e95f713ed64f83ca31aef79010fdef152be019a6f4d8f46eb785f12d04b6421&w=740",
    price: 130,
  },
  {
    id: 2,
    name: "Choco Crunch",
    image: "https://img.freepik.com/premium-photo/chocolate-waffers-parchment-wooden-background_773922-63766.jpg?w=1060",
    price: 170,
  },
  {
    id: 3,
    name: "Candy Chocs",
    image: "https://img.freepik.com/premium-photo/heart-made-chocolates-chocolate-chips-grey-background-top-view-valentine-s-day_810623-1483.jpg?w=826",
    price: 110,
  },
];

function Shop() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const changeQuantity = (id, quantity) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id
          ? quantity > 0
            ? { ...item, quantity }
            : null
          : item
      ).filter(Boolean)
    );
  };

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  return (
    <>
      <div className={`Shop ${isCartOpen ? 'active' : ''}`}>
        <Navbar />
        <div className="container">
          <ProductList products={products} addToCart={addToCart} />
          <ShoppingCart
            cartItems={cartItems}
            isOpen={isCartOpen}
            toggleCart={toggleCart}
            changeQuantity={changeQuantity}
          />
        </div>
      </div>
    </>
  );
}

export default Shop;
