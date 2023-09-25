/* eslint-disable no-unused-vars */
import React from 'react';
import { useCart } from '../context/CartContext';

const CartCheckoutStyle = () => {
    const { cart, getTotalPrice, clearCart, removeItemFromCart } = useCart();

    // Create an object to group items by their ID and calculate quantities
    const groupedCart = cart.reduce((grouped, item) => {
      if (!grouped[item.id]) {
        grouped[item.id] = { ...item, quantity: 0 };
      }
      grouped[item.id].quantity += 1;
      return grouped;
    }, {});
  
    return (
      <div className="cart">
        <h2>Shopping Cart</h2>
        <ul>
          {Object.values(groupedCart).map((item) => (
            <li key={item.id}>
              <img src={item.img} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <button onClick={() => removeItemFromCart(item.id)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
        <p>Total Price: ${getTotalPrice()}</p>
        <button onClick={clearCart}>Clear Cart</button>
      </div>
    );
  };

export default CartCheckoutStyle;