import React from "react";
import ContactItem from "../ContactItem/ContactItem";
import s from "./ContactsList.module.css";

const ContactsList = () => {
  return (
    <div className={s.ContactsList}>
      <ContactItem />
      <ContactItem />
      <ContactItem />
    </div>
  );
};

export default ContactsList;
