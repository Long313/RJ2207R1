import { setNestedObjectValues } from "formik";
import { useState } from "react";
import '../index.css';
export default function ValidateFormSignUp() {
    const [form, setFrom] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        errorMessage: '',
    })
    const MESSAGE_ERROR = {
        username: 'Username error',
        email: 'Email error',
        password: 'Password error',
        confirmPassword: 'Password must be the sam'
    }
    const REGEX = {
        username: /^[a-zA-Z]{2,}$/,
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        password: /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,}$/,
        confirmPassword: /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,}$/,
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const infor = form.username && form.email && form.password && form.confirmPassword;
        return infor? alert('Bạn đã đăng ký thành công') : alert('Bạn phải điền đầy đủ thông tin');
    }
    const handleChange = (e) => {
        let inputElement = document.getElementById(e.target.id);
        let errorElement = inputElement.parentElement.querySelector('.error-message');
        let groupElement = inputElement.parentElement;
        console.log(groupElement);
                if(REGEX[e.target.name].test(e.target.value)) {
                    setFrom({
                        ...form,
                        [e.target.name]: e.target.value,
                        errorMessage: ''
                    })
                    errorElement.innerText = '';
                    groupElement.classList.remove('error');
                } else {
                    setFrom({
                        ...form,
                        [e.target.name]: e.target.value,
                        errorMessage: MESSAGE_ERROR[e.target.name]
                    })
                    errorElement.innerText = form.errorMessage;
                    groupElement.classList.add('error');
                    // console.log(groupElement);
                }
    }
    return (
        <div className="container">
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <p>User Name</p>
                    <input type="text" id="username" name="username" onChange={handleChange} value={form.username || ''} />
                    <p className="error-message">{form.errorMessage}</p>
                </div>
                <div className="form-group">
                    <p>Email</p>
                    <input type="email" id="email" name="email" onChange={handleChange} value={form.email || ''}/>
                    <p className="error-message">{form.errorMessage}</p>
                </div>
                <div className="form-group">
                    <p>Password</p>
                    <input type="text" id="password" name="password" onChange={handleChange} value={form.password || ''}/>
                    <p className="error-message">{form.errorMessage}</p>
                </div>
                <div className="form-group">
                    <p>Confirm Password</p>
                    <input type="text" id="confirmPassword" name="confirmPassword" onChange={handleChange} value={form.confirmPassword || ''}/>
                    <p className="error-message">{form.errorMessage}</p>
                </div>
                    <input type='submit' />
            </form>   
        </div>
    )
}