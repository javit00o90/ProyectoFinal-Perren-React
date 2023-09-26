import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartIcon from '../CartIcon/CartIconComponent';
import { Link } from "react-router-dom";

import styles from "./NavBarComponent.module.css";

const logo = "https://firebasestorage.googleapis.com/v0/b/proyectofinal-perren.appspot.com/o/logo_icon.png?alt=media&token=e2ff3d4a-8374-472c-b70e-59b8426fef96";
function NavBarComponent() {
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary text-decoration-none">
      <Container fluid>
        <Navbar.Brand>
          <Link className={styles.brandText} to="/">
            <img className={styles.brandLogo} src={logo} alt="" />
            Sweet Memories
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link>
                <Link to="/" className={styles.linkText}>Home</Link>
            </Nav.Link>
            <NavDropdown title="Categorías" id="navbarScrollingDropdown" className={styles.linkText}>
              <NavDropdown.Item>
              <Link to="/category/tortas" className={styles.linkText}>Tortas</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
              <Link to="/category/cheesecakes" className={styles.linkText}>Cheesecakes</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
              <Link to="/category/alfajores" className={styles.linkText}>Alfajores</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <Nav.Link>
                <Link to="/cartcheckout" className={styles.linkText}>Cart</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CartIcon />
    </Navbar>
  );
}


export default NavBarComponent;