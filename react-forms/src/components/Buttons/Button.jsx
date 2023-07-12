import React from "react";
import styles from "./Button.module.css";

const Button = ({ isOutline, icon, text }) => {
  // const {isOutline, outline_btn, primary_button} = props  ** object dstructuring

  return (
    <button
      className={`${isOutline ? styles.outline_btn : styles.primary_button}`}
    >
      {icon} {text}
    </button>
  );
};

export default Button;
