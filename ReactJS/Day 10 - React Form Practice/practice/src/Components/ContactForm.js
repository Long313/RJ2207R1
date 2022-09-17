import {Field, Form, Formik} from 'formik';
import * as Yup from 'yup';
const contactSchema = Yup.object().shape({
    name: Yup.string().min(2, "Tên phải lớn hơn 2 ký tự").max(20,"Tên phải nhỏ hơn 20 ký tự").required('Vui lòng nhập tên'),
    email: Yup.string().email("Trường này phải là email").required("Vui lòng nhập email"),
    phone: Yup.string().min(6).required("Vui lòng nhập số điện thoại"),
})
export const ContactForm = () => {
    return (
    <div className="container">
        <Formik
            initialValues={{name: '', email: '', phone: ''}}
            validationSchema={contactSchema}
            onSubmit= { (value) => {
                alert('Submit success');
            }}
        >
            {
                ({errors,touched}) => (
                    <Form>
                        <p>Username</p>
                        <Field name="name"/>
                        {errors.name && touched.name? (<div>{errors.name}</div>): null}
                        <br/>
                        <p>Email</p>
                        <Field name="email"/>
                        {errors.email && touched.email? (<div>{errors.email}</div>): null}
                        <br/>
                        <p>Phone</p>
                        <Field name="phone"/>
                        {errors.phone && touched.phone? (<div>{errors.phone}</div>): null}
                        <br/>
                        <p>Message</p>
                        <textarea name="message"></textarea>
                        <br/>
                        <button type="submit">Submit</button>
                    </Form>
                )
            }
        </Formik>
    </div>
)
}