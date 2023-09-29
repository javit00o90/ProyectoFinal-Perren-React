import Container from 'react-bootstrap/Container';
import { Nav, Navbar as BootstrapNavbar } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartIcon from '../CartIcon/CartIconComponent';
import { Link } from "react-router-dom";

import styles from "./NavBarComponent.module.css";

const logo = "https://firebasestorage.googleapis.com/v0/b/proyectofinal-perren.appspot.com/o/logo_icon.png?alt=media&token=e2ff3d4a-8374-472c-b70e-59b8426fef96";
const NavBarComponent = () => {
  return (
    <BootstrapNavbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary text-decoration-none">
      <Container fluid>
        <BootstrapNavbar.Brand>
          <Link className={styles.brandText} to="/">
            <img className={styles.brandLogo} src={logo} alt="" />
            Sweet Memories
          </Link>
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="navbarScroll" />
        <BootstrapNavbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/" className={styles.linkText}>Home</Nav.Link>
            <NavDropdown title="Categorías" id="navbarScrollingDropdown" className={styles.linkText}>
              <NavDropdown.Item as={Link} to="/category/tortas" className={styles.linkText}>Tortas</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/cheesecakes" className={styles.linkText}>Cheesecakes</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/alfajores" className={styles.linkText}>Alfajores</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/panques" className={styles.linkText}>Panqués</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <Nav.Link as={Link} to="/cartcheckout" className={styles.linkText}>Cart</Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
      <CartIcon />
    </BootstrapNavbar>
  );
}


export default NavBarComponent;