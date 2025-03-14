import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import s from "./FormHard.module.css";
import * as Yup from "yup";
import { nanoid } from "nanoid";

const FormHard = ({ setcontactList }) => {
  const initialValues = {
    contactName: "",
    contactPhoneNumber: "",
    contactCity: "",
    contactType: "",
    contactGender: "",
    contactAgreement: false,
  };

  const handleSubmit = (values, options) => {
    setcontactList((prev) => {
      values["contactId"] = nanoid();
      return [...prev, values];
    });
    options.resetForm();
  };

  const regexcontactName = /\p{L}/gu;

  const orderSchema = Yup.object().shape({
    contactName: Yup.string()
      .matches(regexcontactName, "Тільки букви!")
      .min(2, "Більше 1 символу")
      .max(24, "Не більше 24 символів")
      .required("Це поле обов'язкове"),
    contactPhoneNumber: Yup.number()
      .typeError("Тільки числа!")
      .positive("ТІльки додатні числа!")
      .required("Це поле обов'язкове"),
    contactCity: Yup.string()
      .min(3, "Більше 2 символу")
      .max(24, "Не більше 24 символів")
      .required("Це поле обов'язкове"),
    contactType: Yup.string()
      .oneOf(["Персональний", "Новий", "Робочий"])
      .required("Це поле обов'язкове"),
    contactGender: Yup.string()
      .oneOf(["Чоловічий", "Жіночий"])
      .required("Це поле обов'язкове"),
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
            <ErrorMessage
              name="contactPhoneNumber"
              component="p"
              className={s.errorMessage}
            />
          </label>
          <label className={s.labelForm}>
            <span>Город</span>
            <Field className={s.Field} name="contactCity" />
            <ErrorMessage
              name="contactCity"
              component="p"
              className={s.errorMessage}
            />
          </label>
          <label className={s.labelForm}>
            <span>Вид контакту</span>
            <Field as="select" className={s.Field} name="contactType">
              <option value="Персональний">Персональний</option>
              <option value="Новий">Новий</option>
              <option value="Робочий">Робочий</option>
            </Field>
            <ErrorMessage
              name="contactType"
              component="p"
              className={s.errorMessage}
            />
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
            <ErrorMessage
              name="contactGender"
              component="p"
              className={s.errorMessage}
            />
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
