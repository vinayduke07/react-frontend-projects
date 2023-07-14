import React from "react";
import styles from "./Button.module.css";

export const Button = ({ onClick, text, isOutline }) => {
  return (
    <button
      onClick={onClick}
      className={`${isOutline ? styles.outline_btn : styles.btn_one}`}
    >
      {text}
    </button>
  );
};
