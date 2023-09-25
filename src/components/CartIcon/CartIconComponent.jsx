import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import styles from "./CartIcon.module.css";
import { useCart } from '../../context/CartContext';
import { Link } from "react-router-dom";

const CartIcon = () => {

  const { getTotalItems } = useCart();

  return (
    <Link to="/cartcheckout" className={styles.cartLink} >
    <div className={styles.cartWidged}>
      <FontAwesomeIcon icon={faCartShopping} style={{color: "#ffffff",}} className={styles.cartStyle}/>
      <div className={styles.squareStyle}>
        <span className={styles.numberStyle}> {getTotalItems()} </span>
      </div>
    </div>
    </Link>
  );
};

export default CartIcon;