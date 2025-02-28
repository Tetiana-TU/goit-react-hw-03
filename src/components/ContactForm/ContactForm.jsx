import { Formik, Form, Field } from "formik";

const ContactForm = () => {
  return (
    <Formik initialValues={{}} onSubmit={() => {}}>
      <Form>
        <Field type="text" name="username" />
        <Field type="email" name="email" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
export default ContactForm;
