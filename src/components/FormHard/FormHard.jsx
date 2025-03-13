import React from "react";
import { Formik, Form, Field } from "formik";
import s from "./FormHard.module.css";

const FormHard = () => {
  const initialValues = {
    contactName: "",
    contactPhoneNumber: "",
    contactCity: "",
  };
  const handleSubmit = (values, options) => {
    console.log("values", values);
    console.log("options", options);
    options.resetForm();
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={s.Form}>
        <label className={s.labelForm}>
          <span>Ім'я</span>
          <Field className={s.Field} name="contactName"></Field>
        </label>
        <label className={s.labelForm}>
          <span>Телефон</span>
          <Field className={s.Field} name="contactPhoneNumber"></Field>
        </label>
        <label className={s.labelForm}>
          <span>Город</span>
          <Field className={s.Field} name="contactCity"></Field>
        </label>
        <button type="submit" className={s.ButtonAdd}>
          Add
        </button>
      </Form>
    </Formik>
  );
};

export default FormHard;
