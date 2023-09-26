/* eslint-disable no-unused-vars */
import { useCart } from "../context/CartContext";
import React from "react";
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBRow,
    MDBTypography,
} from "mdb-react-ui-kit";
import Swal from "sweetalert2";
import ButtonsForCart from "../components/ButtonsForCart/buttonsForCartComponent";

import styles from "./CartCheckout.module.css";

const CartCheckout = () => {
    const { cart, getTotalPrice, clearCart } =
        useCart();

    const groupedCart = cart.reduce((grouped, item) => {
        if (!grouped[item.id]) {
            grouped[item.id] = { ...item, quantity: 0 };
        }
        grouped[item.id].quantity += 1;
        return grouped;
    }, {});

    const ConfirmClean = () => {
        Swal.fire({
            title: "¿Está seguro que quiere limpiar el carrito?",
            showDenyButton: true,
            confirmButtonText: "Si",
            denyButtonText: "No",
            showCloseButton: true,
            customClass: {
                actions: "my-actions",
                cancelButton: "order-1 right-gap",
                confirmButton: "order-2",
                denyButton: "order-3",
            },
        }).then((result) => {
            if (result.isConfirmed) {
                clearCart();
                Swal.fire("Carrito limpio!", "", "success");
            } else if (result.isDenied) {
                Swal.fire("No se borró", "", "info");
            }
        });
    };

    return (
        <section className="h-100 h-custom" style={{ backgroundColor: "#575252" }}>
            <MDBContainer className="h-100 py-5">
                <MDBRow className="justify-content-center align-items-center h-100">
                    <MDBCol>
                        <MDBCard className="shopping-cart" style={{ borderRadius: "15px" }}>
                            <MDBCardBody className="text-black">
                                <MDBRow>
                                    <MDBCol lg="7" className="px-5 py-4">
                                        <MDBTypography
                                            tag="h3"
                                            className="mb-5 pt-2 text-center fw-bold text-uppercase"
                                        >
                                            Productos
                                        </MDBTypography>
                                        {Object.values(groupedCart).map((item) => (
                                            <div key={item.id}>
                                                <div className="d-flex align-items-center mb-5">
                                                    <div className="flex-shrink-0">
                                                        <MDBCardImage
                                                            src={item.img}
                                                            fluid
                                                            style={{ width: "150px" }}
                                                            alt="Generic placeholder image"
                                                        />
                                                    </div>

                                                    <div className="flex-grow-1 ms-3">
                                                        <a href="#!" className="float-end text-black">
                                                            <MDBIcon fas icon="times" />
                                                        </a>
                                                        <MDBTypography tag="h5" className="text-primary">
                                                            {item.name}
                                                        </MDBTypography>
                                                        <MDBTypography
                                                            tag="h6"
                                                            style={{ color: "#9e9e9e" }}
                                                        >
                                                            {item.category}
                                                        </MDBTypography>

                                                        <div className="d-flex align-items-center">
                                                            <p className="fw-bold mb-0 me-5 pe-3">
                                                                ${item.price}
                                                            </p>

                                                            <div className="def-number-input number-input safari_only">
                                                                <ButtonsForCart
                                                                    action="rem"
                                                                    itemId={item.id}
                                                                />
                                                                <span className={styles.numQuantity}>
                                                                    {item.quantity}
                                                                </span>
                                                                <ButtonsForCart
                                                                    action="add"
                                                                    itemId={item}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}

                                        <hr
                                            className="mb-4"
                                            style={{
                                                height: "2px",
                                                backgroundColor: "#1266f1",
                                                opacity: 1,
                                            }}
                                        />

                                        <button
                                            onClick={ConfirmClean}
                                            className={styles.clearButton}
                                        >
                                            Limpiar carrito
                                        </button>
                                        <div
                                            className="d-flex justify-content-between p-2 mb-2"
                                            style={{ backgroundColor: "#e1f5fe" }}
                                        >
                                            <MDBTypography tag="h5" className="fw-bold mb-0">
                                                Total:
                                            </MDBTypography>
                                            <MDBTypography tag="h5" className="fw-bold mb-0">
                                                $ {getTotalPrice()}
                                            </MDBTypography>
                                        </div>
                                    </MDBCol>
                                    <MDBCol lg="5" className="px-5 py-4">
                                        <MDBTypography
                                            tag="h3"
                                            className="mb-5 pt-2 text-center fw-bold text-uppercase"
                                        >
                                            Información de pago
                                        </MDBTypography>

                                        <form className="mb-5">
                                            <MDBInput
                                                className="mb-5"
                                                label="Card number"
                                                type="text"
                                                size="lg"
                                                defaultValue="1234 5678 9012 3457"
                                            />

                                            <MDBInput
                                                className="mb-5"
                                                label="Name on card"
                                                type="text"
                                                size="lg"
                                                defaultValue="Javier Perren"
                                            />

                                            <MDBRow>
                                                <MDBCol md="6" className="mb-5">
                                                    <MDBInput
                                                        className="mb-4"
                                                        label="Expiration"
                                                        type="text"
                                                        size="lg"
                                                        minLength="7"
                                                        maxLength="7"
                                                        defaultValue="01/22"
                                                        placeholder="MM/YYYY"
                                                    />
                                                </MDBCol>
                                                <MDBCol md="6" className="mb-5">
                                                    <MDBInput
                                                        className="mb-4"
                                                        label="Cvv"
                                                        type="text"
                                                        size="lg"
                                                        minLength="3"
                                                        maxLength="3"
                                                        placeholder="&#9679;&#9679;&#9679;"
                                                        defaultValue="&#9679;&#9679;&#9679;"
                                                    />
                                                </MDBCol>
                                            </MDBRow>

                                            <p className="mb-5">
                                                Lorem ipsum dolor sit amet consectetur, adipisicing elit
                                                <a href="#!"> obcaecati sapiente</a>.
                                            </p>

                                            <MDBBtn block size="lg">
                                                Pagar Ahora
                                            </MDBBtn>

                                            <MDBTypography
                                                tag="h5"
                                                className="fw-bold mb-5"
                                                style={{ position: "absolute", bottom: "0" }}
                                            ></MDBTypography>
                                        </form>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    );
};

export default CartCheckout;
