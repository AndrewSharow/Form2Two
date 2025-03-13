import React, { useState } from "react";
import s from "./FormLite.module.css";
import { nanoid } from "nanoid";
const FormLite = ({ setcontactList }) => {
  const userDataTemplate = {
    contactName: "",
    contactPhoneNumber: "",
  };
  const [userData, setuserData] = useState(userDataTemplate);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setuserData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    if (userData.contactName && userData.contactPhoneNumber) {
      setcontactList((prev) => {
        return [...prev, { contactId: nanoid(), ...userData }];
      });
      setuserData(userDataTemplate);
    }
  };

  return (
    <form className={s.FormLite} onSubmit={formSubmit}>
      <label>
        <span>Ім'я контакта</span>
        <input
          value={userData.contactName}
          name="contactName"
          onChange={handleChangeInput}
        />
      </label>
      <label>
        <span>Номер телефона</span>
        <input
          value={userData.contactPhoneNumber}
          name="contactPhoneNumber"
          onChange={handleChangeInput}
        />
      </label>
      <button type="submit" className={s.ButtonAdd}>
        Add
      </button>
    </form>
  );
};

export default FormLite;
