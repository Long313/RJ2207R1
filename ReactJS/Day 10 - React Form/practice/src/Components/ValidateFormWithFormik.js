import {Field, Form, Formik} from "formik";
import * as Yup from "yup";
const emailSchema = Yup.object().shape({

});
export const ValidateFormWithFormik = () => (
    <div className="container">
        <Formik
        initialValues={{email: ''}}
        validationSchema={emailSchema}
        onSubmit={ value => { console.log(value);}}
        >
            {
                ({errors,touched}) => {
                    <Form>
                        <Field name="email" />
                        {errors.email && touched.email ? (<div>{errors.email}</div>) : null}
                        <button type="submit">Submit</button>
                    </Form>
                }
            }
        </Formik>
    </div>
)