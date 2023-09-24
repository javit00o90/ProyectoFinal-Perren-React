import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartIcon from '../CartIcon/CartIconComponent';
import { Link } from "react-router-dom";

import styles from "./NavBarComponent.module.css";

const logo = "https://firebasestorage.googleapis.com/v0/b/proyectofinal-perren.appspot.com/o/logosm.png?alt=media&token=91d6a754-d606-4a09-9dee-f33734912944";
function NavBarComponent() {
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
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
                <Link to="/">Home</Link>
            </Nav.Link>
            <NavDropdown title="Categorías" id="navbarScrollingDropdown">
              <NavDropdown.Item>
              <Link to="/category/tortas">Tortas</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
              <Link to="/category/cheesecakes">Cheesecakes</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
              <Link to="/category/alfajores">Alfajores</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CartIcon />
    </Navbar>
  );
}


export default NavBarComponent;