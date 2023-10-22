import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import styles from "../styles/NavBar.module.css";
import logo from "../Assets/logo.png";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import { SetAuthContext, useAuth } from "../contexts/CurrentUserContext";

const NavBar = () => {
  const userLogOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      SetAuthContext(null);
      console.log("succes logged out");
    } catch (err) {
      console.log(err);
    }
  };

  const loggedIn = (
    <NavLink
      exact
      className={styles.NavLink}
      activeClassName={styles.Active}
      to="/"
    >
      <i className="fa-solid fa-house"></i> Logged in from auth
    </NavLink>
  );
  const notLoggedIn = (
    <NavLink
      exact
      className={styles.NavLink}
      activeClassName={styles.Active}
      to="/"
    >
      <i className="fa-solid fa-house"></i> Logged out from auth
    </NavLink>
  );

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
            <h1>Logged in</h1>
            <NavLink
              exact
              className={styles.NavLink}
              activeClassName={styles.Active}
              to="/issue/create"
            >
              <i className="fa-solid fa-right-from-bracket"></i> Post an Issue
              now
            </NavLink>

            <NavLink
              exact
              className={styles.NavLink}
              activeClassName={styles.Active}
              to="/"
            >
              <i className="fa-solid fa-user"></i> My Profile
            </NavLink>
            <NavLink
              exact
              className={styles.NavLink}
              activeClassName={styles.Active}
              onClick={userLogOut}
              to="/"
            >
              <i className="fa-solid fa-right-from-bracket"></i> Sign Out
            </NavLink>
            {/*   <form onSubmit={handleSearch}>
                  <input
                    type="text"
                    placeholder="Search..."
                    value={""}
                    onChange={""}
                  />
                  <button type="submit">Search</button>
                </form> */}
            <h1>Not logged in</h1>
            <NavLink
              exact
              className={styles.NavLink}
              activeClassName={styles.Active}
              to="/signin"
            >
              <i className="fa-solid fa-right-to-bracket"></i> Sign In
            </NavLink>
            <NavLink
              exact
              className={styles.NavLink}
              activeClassName={styles.Active}
              to="/signup"
            >
              <i className="fa-solid fa-user-plus"></i> Sign Up
            </NavLink>
            {useAuth ? loggedIn : notLoggedIn}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
