/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

// import Card from 'react-bootstrap/Card';
// import styles from "./ItemDetailContainerComponent.module.css";
// import { useCart } from '../../context/CartContext';

// const ItemDetailContainerComponent = ({productData}) => {
//   const { cart, addItemToCart, removeItemFromCart, clearCart, getTotalPrice, getTotalItems } = useCart();
//   return (
//     <Card className="bg-dark text-white">
//       <Card.Img src={productData.img} />
//       <Card.ImgOverlay>
//         <div className={styles.cardTxtBox}>
//         <Card.Title className={styles.cardTxtTitle}>{productData.name}</Card.Title>
//         <Card.Text className={styles.cardTxt}>
//         {productData.description}
//         </Card.Text>
//         {/* AQUI EMPIEZA */}
//         <div>
          
//       <h2>Shopping Cart</h2>
//       <p>Number of Items in Cart: {getTotalItems()}</p>
//       {cart.map((productData) => (
//         <div key={productData.id}>
//           <span>{productData.name}</span>
//           <span>${productData.price}</span>
//           <button onClick={() => addItemToCart(productData.id)}>Add</button>
//           <button onClick={() => removeItemFromCart(productData.id)}>Remove</button>
//         </div>
//       ))}
//       <p>Total Price: ${getTotalPrice()}</p>
//       <button onClick={() => clearCart()}>Clear Cart</button>
//     </div>
//     {/* FIN DE ESTO */}
//         </div>
//       </Card.ImgOverlay>
//     </Card>
    
//   );
// }

// export default ItemDetailContainerComponent;


import React from 'react';
import { useCart } from '../../context/CartContext';

import styles from "./ItemDetailContainerComponent.module.css";

const ItemDetailContainerComponent = ({productData}) => {
  const { addItemToCart, removeItemFromCart } = useCart();

  return (
    <div className="product">
      <img src={productData.img} alt={productData.name} className={styles.image} />
      <h2>{productData.name}</h2>
      <p>{productData.description}</p>
      <p>Price: ${productData.price}</p>
      <p>Category: {productData.category}</p>
      <button onClick={() => addItemToCart(productData)}>Add to Cart</button>
      <button onClick={() => removeItemFromCart(productData.id)}>Remove from Cart</button>
    </div>
  );
};

export default ItemDetailContainerComponent;