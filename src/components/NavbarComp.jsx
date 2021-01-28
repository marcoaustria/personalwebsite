import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "../styles/NavbarComp.css";

export const NavbarComp = () => {
  const [currentURL, setCurrentURL] = useState(window.location.hash);
  const typeNum = 0;

  const headerType = () => {
    switch (typeNum) {
      case 0:
        return (
          <Navbar.Text>
            <h1 className="mb-0">
              <a href="/" rel="home" id="logo">
                marco austria
              </a>
            </h1>
          </Navbar.Text>
        );
      case 1:
        return (
          <Navbar.Text>
            <h2
              className="mb-0"
              style={{
                marginTop: "-5px",
                color: "#331391",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Marco Austria
            </h2>
          </Navbar.Text>
        );
      case 2:
        return (
          <Navbar.Text>
            <h2
              className="mb-0"
              style={{
                marginTop: "-5px",
                color: "#331391",
                fontFamily: "Lexend Giga, sans-serif",
              }}
            >
              MARCO AUSTRIA
            </h2>
          </Navbar.Text>
        );
      default:

      // code block
    }
  };
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="md"
        bg="light"
        variant="light"
        id="navbar"
      >
        {/* <Navbar.Brand href="/">
          <img
            alt=""
            src={require("../assets/img/logo/logo.png")}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
        </Navbar.Brand> */}

        {headerType()}

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse
          className="justify-content-end"
          id="responsive-navbar-nav"
        >
          <Nav>
            <Nav.Link href="https://ufl.zoom.us/j/2492570197" eventKey="1">
              <a href="https://ufl.zoom.us/j/2492570197">zoom</a>
            </Nav.Link>
            <Nav.Link
              href="/"
              style={currentURL == "#/" ? { color: "#331391" } : {}}
              onSelect={() => setCurrentURL("#/")}
              eventKey="2"
            >
              home
            </Nav.Link>
            <Nav.Link
              href="#/typography"
              style={currentURL == "#/typography" ? { color: "#331391" } : {}}
              onSelect={() => setCurrentURL("#/typography")}
              eventKey="3"
            >
              typography
            </Nav.Link>
            <Nav.Link
              href="#/game"
              style={currentURL == "#/game" ? { color: "#331391" } : {}}
              onSelect={() => setCurrentURL("#/game")}
              eventKey="4"
            >
              game
            </Nav.Link>
            <Nav.Link
              href="#/professional"
              style={currentURL == "#/professional" ? { color: "#331391" } : {}}
              onSelect={() => setCurrentURL("#/professional")}
              eventKey="5"
            >
              professional
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
export default NavbarComp;
