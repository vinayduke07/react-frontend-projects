import React from "react";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div className={`${styles.navbar}`}>
      <nav className={`${styles.navigation} container`}>
        <div className={`${styles.logo}`}>
          <img
            src="../images/red-304573.svg"
            width="60px"
            height="60px"
            alt="logo-png"
          />
        </div>

        <ul>
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#">ABOUT</a>
          </li>
          <li>
            <a href="#">CONTACT</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
