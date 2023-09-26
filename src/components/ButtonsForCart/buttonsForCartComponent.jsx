/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus, faSquareMinus } from '@fortawesome/free-solid-svg-icons';
import styles from './buttonsForCartComponent.module.css';
import { useCart } from '../../context/CartContext';

const ButtonsForCart = ({ action, itemId }) => {
    const { addItemToCart, removeItemFromCart } = useCart();
    const icon = action === 'add' ? faSquarePlus : faSquareMinus;
    const className = action === 'add' ? styles.addButton : styles.remButton;

    const handleClick = () => {
        if (action === 'add') {
            addItemToCart(itemId);
        } else {
            removeItemFromCart(itemId);
        }
    };

    return (
        <FontAwesomeIcon
            className={className}
            icon={icon}
            onClick={handleClick}
        />
    );
};

export default ButtonsForCart;
