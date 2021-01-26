import React, { useState, Fragment } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";

export const NavbarComp = () => {
  return (
    <>
      <Navbar bg="light" variant="light" sticky="top">
        <Navbar.Brand href="/">
          <img
            alt=""
            src={require("../assets/img/logo/logo.png")}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
        </Navbar.Brand>

        <Navbar.Text>
          <h2
            className="mb-0"
            style={{ color: "#331391", fontFamily: "Raleway, sans-serif" }}
          >
            Marco Austria
          </h2>
        </Navbar.Text>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link href="https://ufl.zoom.us/j/2492570197">
              <a href="https://ufl.zoom.us/j/2492570197">Zoom</a>
            </Nav.Link>
            <Nav.Link
              href="/"
              style={
                window.location.pathname === "/" ? { color: "#331391" } : {}
              }
            >
              hello
            </Nav.Link>
            <Nav.Link
              href="/typography"
              style={
                window.location.pathname === "/typography"
                  ? { color: "#331391" }
                  : {}
              }
            >
              Typography
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
export default NavbarComp;
