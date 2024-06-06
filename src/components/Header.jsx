import { Button, Offcanvas } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase";
import { useState } from "react";

function Header({
  signedIn,
  setSignedIn,
  buttonsDisabled,
  setButtonsDisabled,
}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();

  const handleLogout = () => {
    setButtonsDisabled(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setButtonsDisabled(false);
        setSignedIn(false);
        navigate("/");
        console.log("Signed out successfully");
      })
      .catch((error) => {
        // An error happened.
        setButtonsDisabled(false);
      });
  };

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
        {buttonsDisabled === true ? (
          <Navbar.Brand className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none fs-4">
            Catchy👂🎶
          </Navbar.Brand>
        ) : (
          <Navbar.Brand
            href="/"
            className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none fs-4"
          >
            Catchy👂🎶
          </Navbar.Brand>
        )}

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
            {buttonsDisabled === true ? (
              <p className="nav-link mb-0">Home</p>
            ) : (
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            )}

            {buttonsDisabled === true ? (
              <p className="nav-link mb-0">About</p>
            ) : (
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
            )}

            {/* <Nav.Link href="/songs">Songs </Nav.Link> */}
            {/* <Nav.Link href="/artists">Artists </Nav.Link> */}
            {/* <Nav.Link href="/charts">Charts </Nav.Link> */}
            {/* <Nav.Link href="/gigs">Gigs </Nav.Link> */}
            {
              signedIn === undefined ? null : signedIn === false ? (
                buttonsDisabled === true ? (
                  <div id="login-and-signup-buttons">
                    <a>
                      <Button
                        variant="outline-primary"
                        className="nav-button-link nav-buttons"
                        disabled={buttonsDisabled}
                      >
                        Login
                      </Button>
                    </a>
                    <a href="">
                      <Button
                        className="nav-button-link nav-buttons"
                        disabled={buttonsDisabled}
                      >
                        Sign-up
                      </Button>
                    </a>
                  </div>
                ) : (
                  <div id="login-and-signup-buttons">
                    <NavLink to="/login">
                      <Button
                        variant="outline-primary"
                        className="nav-button-link nav-buttons"
                      >
                        Login
                      </Button>
                    </NavLink>
                    <NavLink to="/signup">
                      <Button className="nav-button-link nav-buttons">
                        Sign-up
                      </Button>
                    </NavLink>
                  </div>
                )
              ) : null
              // <NavLink to="/profile" className="nav-link">
              //   Profile
              // </NavLink>
            }
            {signedIn === true ? (
              <NavLink to="/settings" className="nav-link">
                Settings
              </NavLink>
            ) : // <NavDropdown title="Settings" id="basic-nav-dropdown">
            //   <NavLink to="/settings" className="dropdown-item">
            //     Settings Page
            //   </NavLink>
            //   <NavLink to="/settings/email" className="dropdown-item">
            //     Update Email
            //   </NavLink>
            //   <NavLink to="/settings/password" className="dropdown-item">
            //     Update Password
            //   </NavLink>
            //   <NavDropdown.Divider />
            //   <NavLink to="/settings/delete" className="dropdown-item">
            //     Delete Account
            //   </NavLink>
            // </NavDropdown>
            null}

            {signedIn === true ? (
              <Button
                variant="outline-primary"
                id="logout-button"
                className="nav-button-link m-auto nav-buttons"
                onClick={handleLogout}
              >
                Logout
              </Button>
            ) : null}
          </Nav>
        </Navbar.Collapse>
        {/* <Button variant="primary" onClick={handleShow}>
          Settings ⚙️
        </Button>

        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </Offcanvas.Body>
        </Offcanvas> */}
      </Container>
    </Navbar>
  );
}

export default Header;
