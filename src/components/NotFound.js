import React from "react";
import NoResults from "../Assets/NoPostBackground.png";
import styles from "../styles/NotFound.module.css";
import Asset from "./Asset";
import { Link } from "react-router-dom/cjs/react-router-dom";

const NotFound = () => {
  return (
    <div className={styles.NotFound}>
      <Asset
        src={NoResults}
        message={`Sorry, the page you're looking for doesn't exist`}
      />
      <Link to="/" className={styles.Link}>
        Go to the home page:
      </Link>
    </div>
  );
};

export default NotFound;
