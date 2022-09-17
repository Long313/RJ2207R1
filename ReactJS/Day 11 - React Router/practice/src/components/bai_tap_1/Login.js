import { useState } from "react";
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";
export default function Login() {
    const loginSchema = Yup.object().shape({
        email: Yup.string().email().required(),
        password: Yup.string().min(6).max(12).required()
    })
    const navigate = useNavigate();
    const [form,setForm] = useState({email:'', password:''});
    const hanleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    }
    return (
        <div className='container pt-5'>
            <Formik initialValues= {form}
                    enableReinitialize= {true}
                    validationSchema={loginSchema}
                    onSubmit={ value => {
                        console.log(value);
                        if(value.email === 'admin@gmail.com' && value.password === 'letmein'){
                            navigate('/home',{state:form});
                        } else {
                            setForm({email: '', password: ''});
                            alert('Please enter your account again!!!');
                        }
                    }}
            >
                <Form>
                    <Field name='email' onChange={hanleChange} value={form.email || ''} placeholder='Enter a email'/>
                    <br/>
                    <ErrorMessage name='email' component='div' className='text-danger' />
                    <br/>
                    <Field name='password' onChange={hanleChange} value={form.password || ''} placeholder='Enter a password'/>
                    <br/>
                    <ErrorMessage name='password' component='div' className="text-danger" />
                    <br/>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                </Form>
            </Formik>
        </div>
    )
}