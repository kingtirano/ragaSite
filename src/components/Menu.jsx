import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import "./Menu.css";

function Menu() {
  return (
    <Navbar
      fixed="top"
      bg="dark"
      data-bs-theme="dark"
      collapseOnSelect
      expand="lg"
      className=""
    >
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/src/assets/logo.png"
            width="112"
            height="35"
            className="d-inline-block"
          />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav className="">
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#events">EVENTS</Nav.Link>
            <Nav.Link href="#about">ABOUT</Nav.Link>
            <Nav.Link href="#events2">GALLERY</Nav.Link>
            <Nav.Link href="#">MEDIA</Nav.Link>
            <Nav.Link href="#">AUDIO</Nav.Link>
            <Nav.Link href="#">SUBSCRIBE</Nav.Link>
            <NavDropdown title="PAGES" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#">BLOG LIST</NavDropdown.Item>
              <NavDropdown.Item href="#">BLOG LIST</NavDropdown.Item>
              <NavDropdown.Item href="#">BLOG LIST</NavDropdown.Item>
              <NavDropdown.Item href="#">BLOG LIST</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">CONTACTS</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
