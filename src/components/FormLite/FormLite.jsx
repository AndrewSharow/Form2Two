import React, { useState } from "react";
import s from "./FormLite.module.css";
const FormLite = () => {
  const userDataTRemplate = {
    contactName: "",
    phoneNumber: "",
  };
  const [userData, setuserData] = useState(userDataTRemplate);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setuserData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    setuserData(userDataTRemplate);
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
          value={userData.phoneNumber}
          name="phoneNumber"
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
