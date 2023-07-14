import React from "react";
import styles from "./FrontPage.module.css";
import { Button } from "../Button/Button";

const FrontPage = ({ toggle }) => {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.dice_image}`}>
        <img src="./images/cubes_gambling_n_02 1.png" alt="" />
      </div>
      <div className={`${styles.content}`}>
        <h1>DICE GAME</h1>
        <div className={`${styles.btn_1}`}>
          <Button onClick={toggle} text="Play Now" />
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
