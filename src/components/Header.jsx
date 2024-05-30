import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

function Header() {
  return (
    //Header with just brand
    // <Navbar fixed="top" bg="light" data-bs-theme="light">
    //   <Container className="d-flex flex-wrap align-items-center justify-content-center  py-3 border-bottom">
    //     <Navbar.Brand
    //       href="/"
    //       className="d-flex align-items-center text-dark text-decoration-none fs-4 me-0 "
    //     >
    //       Catchy 🔊👂
    //     </Navbar.Brand>
    //   </Container>
    // </Navbar>

    //Header with all links, login and sign-up
    <Navbar
      expand="md"
      bg="white"
      data-bs-theme="light"
      sticky="top"
      // fixed="top"
    >
      <Container className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 border-bottom">
        <Navbar.Brand
          href="/"
          className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none fs-4"
        >
          Catchy👂🎶
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="ms-auto"
          id="Toggler"
        />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="ms-auto  col-12 col-md-auto mb-2 d-flex justify-content-end mb-md-0"
            justify
          >
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>

            {/* <Nav.Link href="/songs">Songs</Nav.Link> */}
            {/* <Nav.Link href="/artists">Artists</Nav.Link> */}
            {/* <Nav.Link href="/charts">Charts</Nav.Link> */}
            {/* <Nav.Link href="/gigs">Gigs</Nav.Link> */}
            {/* <div id="login-and-signup-buttons">
              <Button variant="outline-primary" className="nav-button-link">
                Login
              </Button>
              <Button className="nav-button-link">Sign-up</Button>
            </div> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
