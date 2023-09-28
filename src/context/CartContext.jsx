/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState, createContext, useContext } from 'react';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const userId = localStorage.getItem('userId') || uuidv4();
    localStorage.setItem('userId', userId);

    const db = getFirestore();

    useEffect(() => {
        const loadCartFromFirestore = async () => {
            try {
                const cartDoc = doc(db, 'carts', userId);
                const cartSnapshot = await getDoc(cartDoc);

                if (cartSnapshot.exists()) {
                    setCart(cartSnapshot.data().items);
                }
            } catch (error) {
                console.error('Error loading cart from Firestore:', error);
            }
        };

        loadCartFromFirestore();
    }, [db, userId]);

    const addItemToCart = (item) => {
        const updatedCart = [...cart, item];
        setCart(updatedCart);

        const cartDoc = doc(db, 'carts', userId);
        setDoc(cartDoc, { items: updatedCart });
    };

    const removeItemFromCart = (itemId) => {
        const indexOfItemToRemove = cart.findIndex((item) => item.id === itemId);
    
        if (indexOfItemToRemove !== -1) {
            const updatedCart = [...cart];
            updatedCart.splice(indexOfItemToRemove, 1);
            setCart(updatedCart);
    
            const cartDoc = doc(db, 'carts', userId);
            setDoc(cartDoc, { items: updatedCart });
        }
    };

    const clearCart = () => {
        setCart([]);

        const cartDoc = doc(db, 'carts', userId);
        setDoc(cartDoc, { items: [] });
    };

    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + item.price, 0);
    };

    const getTotalItems = () => {
        return cart.length;
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
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
export const useCart = () => {
    return useContext(CartContext);
};