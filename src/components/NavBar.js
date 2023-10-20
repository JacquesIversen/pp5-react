import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import styles from "../styles/NavBar.module.css";
import logo from "../Assets/logo.png";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { useAuth } from "../contexts/CurrentUserContext";

const NavBar = () => {
  const { currentUser } = useAuth();
  console.log(currentUser);
  return (
    <Navbar className={`${styles.navbar} mr-auto`} expand="lg">
      <Container className="ml-auto">
        <NavLink to="/">
          <Navbar.Brand>
            <img src={logo} alt="logo" height="45" />
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <NavLink
              exact
              className={styles.NavLink}
              activeClassName={styles.Active}
              to="/"
            >
              <i className="fa-solid fa-house"></i> Home
            </NavLink>
            {currentUser && (
              <>
                <NavLink
                  exact
                  className={styles.NavLink}
                  activeClassName={styles.Active}
                  to="/"
                >
                  <i class="fa-solid fa-right-from-bracket"></i> Post an Issue
                  now
                </NavLink>
                <NavLink
                  exact
                  className={styles.NavLink}
                  activeClassName={styles.Active}
                  to="/"
                >
                  <i class="fa-solid fa-right-from-bracket"></i> Sign Out
                </NavLink>
              </>
            )}
            {!currentUser && (
              <>
                <NavLink
                  exact
                  className={styles.NavLink}
                  activeClassName={styles.Active}
                  to="/signin"
                >
                  <i class="fa-solid fa-right-to-bracket"></i> Sign In
                </NavLink>
                <NavLink
                  exact
                  className={styles.NavLink}
                  activeClassName={styles.Active}
                  to="/signup"
                >
                  <i class="fa-solid fa-user-plus"></i> Sign Up
                </NavLink>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
