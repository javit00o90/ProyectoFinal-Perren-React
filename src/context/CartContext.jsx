/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import React, { createContext, useState, useContext } from 'react';


// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//     const [cart, setCart] = useState(() => {
//         const savedCart = localStorage.getItem('cart');
//         return savedCart ? JSON.parse(savedCart) : [];
//       });


//   const addItemToCart = (item) => {
//     setCart([...cart, item]);
//   };


//   const removeItemFromCart = (itemId) => {
//     const indexOfItemToRemove = cart.findIndex((item) => item.id === itemId);
  
//     if (indexOfItemToRemove !== -1) {
//       const updatedCart = [...cart];
//       updatedCart.splice(indexOfItemToRemove, 1);
//       setCart(updatedCart);
//     }
//   };

//   const clearCart = () => {
//     setCart([]);
//   };

//   const getTotalPrice = () => {
//     return cart.reduce((total, item) => total + item.price, 0);
//   };
//   const getTotalItems = () => {
//     return cart.length;
//   };
//   const saveCartToLocalStorage = (cartData) => {
//     localStorage.setItem('cart', JSON.stringify(cartData));
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         cart,
//         addItemToCart,
//         removeItemFromCart,
//         clearCart,
//         getTotalPrice,
//         getTotalItems,
//         saveCartToLocalStorage,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => {
//   return useContext(CartContext);
// };

import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    saveCartToLocalStorage(cart); // Save cart to localStorage whenever it changes
  }, [cart]);

  const addItemToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeItemFromCart = (itemId) => {
    const indexOfItemToRemove = cart.findIndex((item) => item.id === itemId);

    if (indexOfItemToRemove !== -1) {
      const updatedCart = [...cart];
      updatedCart.splice(indexOfItemToRemove, 1);
      setCart(updatedCart);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  const getTotalItems = () => {
    return cart.length;
  };

  const saveCartToLocalStorage = (cartData) => {
    localStorage.setItem('cart', JSON.stringify(cartData));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItemToCart,
        removeItemFromCart,
        clearCart,
        getTotalPrice,
        getTotalItems,
        saveCartToLocalStorage,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
