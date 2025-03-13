import React from "react";
import s from "./ContactItem.module.css";

const ContactItem = ({
  contactId,
  contactName,
  contactPhoneNumber,
  handleDeleteItem,
}) => {
  return (
    <div className={s.ContactItem}>
      <div className={s.contactInfo}>
        <span className={s.contactName}>
          <img className={s.icon} src="../../icons/contactCard.png" />
          <span>{contactName}</span>
        </span>
        <span className={s.contactPhone}>
          <img className={s.icon} src="../../icons/phone.png" />
          <span>{contactPhoneNumber}</span>
        </span>
      </div>
      <button
        className={s.deleteButton}
        onClick={() => handleDeleteItem(contactId)}
      >
        Delete
      </button>
    </div>
  );
};

export default ContactItem;
