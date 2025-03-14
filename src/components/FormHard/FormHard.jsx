import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import s from "./FormHard.module.css";
import * as Yup from "yup";

const FormHard = () => {
  const initialValues = {
    contactName: "",
    contactPhoneNumber: "",
    contactCity: "",
    contactType: "",
    contactGender: "",
    contactAgreement: false,
  };

  const handleSubmit = (values, options) => {
    console.log("values", values);
    options.resetForm();
  };

  const orderSchema = Yup.object().shape({
    contactName: Yup.string().min(2).max(24).required(),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={orderSchema}
    >
      {({ values }) => (
        <Form className={s.Form}>
          <label className={s.labelForm}>
            <span>Ім'я</span>
            <Field className={s.Field} name="contactName" />
            <ErrorMessage
              name="contactName"
              component="p"
              className={s.errorMessage}
            />
          </label>
          <label className={s.labelForm}>
            <span>Телефон</span>
            <Field className={s.Field} name="contactPhoneNumber" />
          </label>
          <label className={s.labelForm}>
            <span>Город</span>
            <Field className={s.Field} name="contactCity" />
          </label>
          <label className={s.labelForm}>
            <span>Вид контакту</span>
            <Field as="select" className={s.Field} name="contactType">
              <option value="Персональний">Персональний</option>
              <option value="Новий">Новий</option>
              <option value="Робочий">Робочий</option>
            </Field>
          </label>
          <div className={s.radioGender}>
            <label>
              <Field
                type="radio"
                value="Чоловічий"
                className={s.Field}
                name="contactGender"
              />
              Чоловічий
            </label>
            <label>
              <Field
                type="radio"
                value="Жіночий"
                className={s.Field}
                name="contactGender"
              />
              Жіночий
            </label>
          </div>
          <label className={s.agreementLabel}>
            <Field type="checkbox" name="contactAgreement" />
            Прочитав правила та погоджуюсь!
          </label>
          <button
            disabled={values.contactAgreement === false}
            type="submit"
            className={s.ButtonAdd}
          >
            Add
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormHard;
