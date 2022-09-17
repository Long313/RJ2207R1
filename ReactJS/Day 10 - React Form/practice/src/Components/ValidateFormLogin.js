import { useState } from "react";
import '../index.css';
export default function ValidateFormLogin() {
    const [form, setForm] = useState({});
    const MESSAGE_ERROR = {
        email: 'Email error',
        password: 'Password error'
    }
    const REGEX = {
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        password: /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,}$/
    }
    const handleChange = (e) => {
        const error = REGEX[e.target.name].test(e.target.value) ? '' : MESSAGE_ERROR[e.target.name]
        setForm({
            ...form,
            [e.target.name]: { 
                value: e.target.value,
                error: error
            }
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const isFullFilled = form.email && form.email.value && form.password && form.password.value;
        const isError = isFullFilled && (form.email.error || form.password.error);
        if(isFullFilled && !isError) {
            alert("Login is Success!!!");
        } else {
            alert("Please fill out all the fields!!!");
        }
        
    }
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className={`form-group ${form.email && form.email.error && "error"}`}>
                    <p>Email</p>
                    <input name="email" onChange={handleChange}/>
                </div>
                <div className={`form-group ${form.password && form.password.error && "error"}`}>
                    <p>Password</p>
                    <input id="password" name="password" onChange={handleChange}/>
                </div>
                    <input type='submit' value='Submit'/>
            </form>
        </div>
    )
}