import { useId } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const initialValues = {
  name: "",
  number: "",
};

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name is too Short!")
    .max(50, "Name is too Long!")
    .required("Required"),
  number: Yup.string()
    .matches(
      /^(?:\+38)?(\(0\d{2}\)\d{3}-\d{4}|\(0\d{2}\)\d{3}-\d{2}-\d{2}|0\d{9}|\d{3}-\d{2}-\d{2})$/,
      "Incorrect phone number format"
    ) // Регулярний вираз для валідації from https://poe.com/s/e3yJBmpLrsdnOqOGdjrQ
    .required("Required!")
    .typeError("Enter phone-number!"),
});

const ContactForm = ({ addContact }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    // використовуємо nanoid для генерації унікального id
    // useId генерує помилку:
    // React Hook "useId" is called in function "handleSubmit" that is neither a React function component nor a custom React Hook function. React component names must start with an uppercase letter. React Hook names must start with the word "use"
    values.id = nanoid();
    addContact(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <label htmlFor={nameFieldId}>Name</label>
        <Field className={css.field} type="text" name="name" id={nameFieldId} />
        <ErrorMessage name="name" component="span" className={css.error} />

        <label htmlFor={numberFieldId}>Number</label>
        <Field
          className={css.field}
          type="text"
          name="number"
          id={numberFieldId}
          placeholder="XXX-XX-XX"
        />
        <ErrorMessage name="number" component="span" className={css.error} />

        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
