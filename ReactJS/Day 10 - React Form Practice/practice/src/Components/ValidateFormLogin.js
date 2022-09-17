import {Field, Form, Formik } from 'formik';
import * as Yup from "yup";
const emailSchema = Yup.object().shape({
    username: Yup.string().min(2," >2 ký tự").max(20, "<20 ký tự plz"),
    email: Yup.string().email('Invalid email address').required("Vui lòng nhập email"),
    age: Yup.number().min(1).max(10)
});
export const ValidateFormLogin = () => (
    <div className="container">
        <Formik
            initialValues={{ username: '', email: '', age: ''}}
            validationSchema={emailSchema}
            onSubmit={ value => {console.log(value)}}
        >
           {
            ({errors, touched}) => (
                <Form>
                    <Field name="username"/>
                    {errors.username && touched.username ? (<div>{errors.username}</div>): null}
                    <Field name="email"/>
                    {errors.email && touched.email ? (<div>{errors.email}</div>): null}
                    <Field name="age"/>
                    {errors.age && touched.age ? (<div>{errors.age}</div>): null}
                    <button type="submit">Submit</button>
                </Form>
            )
           }
        </Formik>
    </div>
)