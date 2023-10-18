import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import styles from "../styles/NavBar.module.css"; // Import the CSS file
import logo from "../Assets/logo.png";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const NavBar = () => {
  return (
    <Navbar className={styles.navbar} expand="lg">
      <Container>
        <NavLink to="/">
          <Navbar.Brand>
            <img src={logo} alt="logo" height="45" />
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavLink
              exact
              className={styles.NavLink}
              activeClassName={styles.Active}
              to="/"
            >
              <i className="fa-solid fa-house"></i> Home
            </NavLink>
            <NavLink
              className={styles.NavLink}
              activeClassName={styles.Active}
              to="/signin"
            >
              <i className="fa-solid fa-right-to-bracket"></i> Sign In
            </NavLink>
            <NavLink
              className={styles.NavLink}
              activeClassName={styles.Active}
              to="/signup"
            >
              <i className="fa-solid fa-user-plus"></i> Sign Up
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
