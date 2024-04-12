import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Header() {
  return (
    //Header with just brand
    <Navbar expand="sm">
      <Container className="d-flex flex-wrap align-items-center justify-content-center  py-3 border-bottom">
        <Navbar.Brand
          href="/"
          className="d-flex align-items-center text-dark text-decoration-none fs-4"
        >
          Earworm 👂🐛
        </Navbar.Brand>
      </Container>
    </Navbar>

    // Header with Nav, Login and Sign up
    // <Navbar
    //   expand="sm"
    // >
    //   <Container
    //     className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 border-bottom"
    //   >
    //     <Navbar.Brand
    //       href="/"
    //       className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none fs-4"
    //     >
    //       Earworm 👂🐛{" "}

    //     </Navbar.Brand>

    //     <Navbar.Toggle
    //       aria-controls="basic-navbar-nav"
    //       className="ms-auto"
    //       id="Toggler"
    //     />

    //     <Navbar.Collapse id="basic-navbar-nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
    //       <Nav className="m-auto" justify>
    //         <Nav.Link href="/">Home</Nav.Link>
    //         <Nav.Link href="/songs">Songs</Nav.Link>
    //         <Nav.Link href="/artists">Artists</Nav.Link>
    //         <Nav.Link href="/charts">Charts</Nav.Link>
    //         <Nav.Link href="/gigs">Gigs</Nav.Link>

    //         {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
    //           <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.2">
    //             Another action
    //           </NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    //           <NavDropdown.Divider />
    //           <NavDropdown.Item href="#action/3.4">
    //             Separated link
    //           </NavDropdown.Item>
    //         </NavDropdown> */}
    //       </Nav>
    //     </Navbar.Collapse>

    //     <div class="col-md-3 text-end">
    //       <button type="button" class="btn btn-outline-primary me-2">
    //         Login
    //       </button>
    //       <button type="button" class="btn btn-primary">
    //         Sign-up
    //       </button>
    //     </div>

    //   </Container>
    // </Navbar>
  );
}

export default Header;
