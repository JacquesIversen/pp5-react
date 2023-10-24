import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import styles from "../styles/NavBar.module.css";
import logo from "../Assets/logo.png";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { useAuth } from "../contexts/CurrentUserContext";

const NavBar = () => {
  const { currentUser, logout } = useAuth();

  return (
    <Navbar className={`${styles.navbar} `} expand="lg">
      <Container className="">
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

            {currentUser ? (
              <>
                <NavLink
                  exact
                  className={styles.NavLink}
                  activeClassName={styles.Active}
                  to="/issue/create"
                >
                  <i className="fa-solid fa-right-from-bracket"></i> Post an
                  Issue now
                </NavLink>

                <NavLink
                  exact
                  className={styles.NavLink}
                  activeClassName={styles.Active}
                  to="/"
                >
                  <i className="fa-solid fa-user"></i> My Profile
                </NavLink>
                <button onClick={logout}>Logout</button>
              </>
            ) : (
              <>
                <NavLink
                  exact
                  className={styles.NavLink}
                  activeClassName={styles.Active}
                  to="/signin"
                >
                  <i className="fa-solid fa-user"></i> Sign In
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
