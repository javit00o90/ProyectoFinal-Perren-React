/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from 'react';
import { useCart } from '../../context/CartContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import {
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';

import styles from "./modalClean.module.css"

const ModalClean = ({ onModalClose }) => {
    const { clearCart } = useCart();
  
    const handleClearCart = () => {
      clearCart();
      onModalClose();
    };
  

    return (
        <MDBModal staticBackdrop tabIndex='-1' show onHide={onModalClose}>
          <MDBModalDialog>
            <MDBModalContent>
              <MDBModalHeader>
                <MDBModalTitle>
                    <FontAwesomeIcon icon={faTriangleExclamation} shake style={{color: "#f2be02",}} />
                    Cuidado!
                    </MDBModalTitle>
                <button className='btn-close' onClick={onModalClose}></button>
              </MDBModalHeader>
              <MDBModalBody>¿Está seguro que desea limpiar el carrito?</MDBModalBody>
              <MDBModalFooter>
                <button onClick={onModalClose} className={styles.cancelButton} >Cancelar</button>
                <button onClick={handleClearCart} className={styles.cleanButton} >Limpiar</button>
              </MDBModalFooter>
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>
      );
    }


export default ModalClean;