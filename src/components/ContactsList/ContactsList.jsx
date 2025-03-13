import React from "react";
import ContactItem from "../ContactItem/ContactItem";
import s from "./ContactsList.module.css";

const ContactsList = ({ contactList, setcontactList }) => {
  const handleDeleteItem = (contactId) => {
    setcontactList((prev) =>
      prev.filter((item) => item.contactId !== contactId)
    );
  };
  return (
    <div className={s.ContactsList}>
      {contactList.map((contact) => {
        return (
          <ContactItem
            key={contact.contactId}
            {...contact}
            handleDeleteItem={handleDeleteItem}
          />
        );
      })}
    </div>
  );
};

export default ContactsList;
