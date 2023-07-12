import React, { useState } from "react";
import styles from "./ContactFrom.module.css";
import Button from "../Buttons/Button";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export const ContactFrom = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  };

  return (
    <section className={`${styles.container}`}>
      <div className={`${styles.contact_form}`}>
        <div className={`${styles.top_btn}`}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="24px" />} />
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<FiMail fontSize="24px" />}
        />
        <form onSubmit={onSubmit}>
          <div className={`${styles.form_control}`}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={`${styles.form_control}`}>
            <label htmlFor="name">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={`${styles.form_control}`}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows={8} />
          </div>
          <div className={`${styles.last_button}`}>
            <Button text="Submit" fontSize="24px" />
          </div>
        </form>
      </div>
      <div className={`${styles.contact_image}`}>
        <img src="../images/Service 24_7-pana 1.svg" width="590px" alt="" />
      </div>

      <div className={`${styles.onSubmit}`}>
        {name + " " + email + " " + text}
      </div>
    </section>
  );
};
