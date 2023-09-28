/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faStar } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBRipple,
} from "mdb-react-ui-kit";
import ButtonsForCart from "../ButtonsForCart/buttonsForCartComponent";

import styles from "./ItemDetailContainer.module.css";

const ItemDetailContainerComponent = ({ productData }) => {
  return (
    <MDBContainer fluid className={"py-5"}>
      <MDBRow className="justify-content-center">
        <MDBCol md="8" lg="6" xl="4">
          <MDBCard style={{ borderRadius: "15px" }}>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image rounded hover-overlay">
              <img src={productData.img} alt="" className={styles.image}/>
            </MDBRipple>
            <MDBCardBody className="pb-0">
              <div className="d-flex justify-content-between">
                <div>
                  <p className={styles.boldText}>
                    {productData.name}
                  </p>
                  <p className="small text-muted  text-capitalize">{productData.category}</p>
                  <hr className="my-0" />
                  
                  <p>{productData.description}</p>
                </div>
                <div>
                  <p className="small text-muted">
                  <FontAwesomeIcon icon={faStar} style={{color: "#e3c60d",}} />
                    Rated 4.0/5</p>
                </div>
              </div>
            </MDBCardBody>
            <hr className="my-0" />
            <MDBCardBody className="pb-0">
              <div className="d-flex justify-content-between">
                <p className={styles.boldText}>
                  ${productData.price}
                </p>
              </div>
            </MDBCardBody>
            <hr className="my-0" />
            <MDBCardBody className="pb-0">
              <div className="d-flex align-items-center pb-2 mb-4">
                <ButtonsForCart
                  action="rem"
                  itemId={productData.id}
                />
                <FontAwesomeIcon icon={faCartShopping} style={{color: "#000000",}} beat />
                <ButtonsForCart
                  action="add"
                  itemId={productData}
                />
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default ItemDetailContainerComponent;