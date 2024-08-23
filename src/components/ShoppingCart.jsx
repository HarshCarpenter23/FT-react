import React from 'react';

function ShoppingCart({ cartItems, isOpen, toggleCart, changeQuantity }) {
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <div className="shopping" onClick={toggleCart}>
        <img
          src="https://img.freepik.com/premium-vector/white-icon-buying-black-background_992397-20850.jpg?w=740"
          alt="Shopping Cart"
        />
        <span className="quantity">{totalQuantity}</span>
      </div>
      <div className={`card ${isOpen ? 'active' : ''}`}>
        <h1>Shopping Cart</h1>
        <ul className="listCard">
          {cartItems.map((item) => (
            <li key={item.id}>
              <div><img src={item.image} alt={item.name} /></div>
              <div>{item.name}</div>
              <div>₹{item.price.toLocaleString()}</div>
              <div>
                <button onClick={() => changeQuantity(item.id, item.quantity - 1)}>-</button>
                <div className="count">{item.quantity}</div>
                <button onClick={() => changeQuantity(item.id, item.quantity + 1)}>+</button>
              </div>
            </li>
          ))}
        </ul>
        <div className="checkOut">
          <div className="total">₹{totalPrice.toLocaleString()}</div>
          <div className="closeShopping" onClick={toggleCart}>Close</div>
        </div>
      </div>
    </>
  );
}

export default ShoppingCart;
