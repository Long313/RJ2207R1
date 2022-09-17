import {Formik, Form, Field, ErrorMessage} from 'formik';
import { useState } from 'react';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
export default function Login() {
    const [form,setForm] = useState({email: '', password: ''});
    const handleChange = (e) => {
        setForm({
            ...form,[e.target.name]: e.target.value
        })
    }
    const navigate = useNavigate();
    const loginSchema = Yup.object().shape({
        email: Yup.string().email().required(),
        password: Yup.string().min(6).max(12).required()
    })
    return (
        <div className='container-fluid mt-5'>
            <Formik initialValues={form}
                    enableReinitialize= {true}
                    validationSchema={loginSchema}
                    onSubmit={(value) => {
                        if(value.email === 'admin@gmail.com' && value.password === 'letmein') {
                            navigate('/employee');
                        } else {
                            setForm({email: '', password: ''});
                            alert('Pleasse enter again!!!');
                        }
                    }}
            >
                <Form>
                    <Field name='email' onChange={handleChange} value={form.email || ''} placeholder='Enter a email' />
                    <br/>
                    <ErrorMessage  name='email' className='text-danger' />
                    <br/>
                    <Field name='password' onChange={handleChange} value={form.password || ''} placeholder='Enter a password' />
                    <br/>
                    <ErrorMessage  name='password' className='text-danger' />
                    <br/>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                </Form>
            </Formik>
        </div>
    )
}