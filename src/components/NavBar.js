import React, { useEffect, useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
/* import { Link } from "react-router-dom"; */
import styles from "../styles/NavBar.module.css"; // Import the CSS file
import logo from "../Assets/logo.png";

const NavBar = () => {
  const [isSticky, setSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar className={styles.NavBar} expand="lg">
      <Navbar.Brand to="/">
        <img src={logo} alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          {/* Add your navigation links here */}
          <Nav.Link /* as={Link} */ to="/home">
            <i class="fa-solid fa-house"></i> Home
          </Nav.Link>
          <Nav.Link /* as={Link} */ to="/about">
            <i class="fa-solid fa-right-to-bracket"></i> Sign In
          </Nav.Link>
          <Nav.Link /* as={Link} */ to="/about">
            <i class="fa-solid fa-user-plus"></i> Sign Up
          </Nav.Link>
          {/* Add more links as needed */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
