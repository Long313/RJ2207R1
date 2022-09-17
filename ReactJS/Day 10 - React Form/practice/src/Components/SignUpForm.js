import { useState } from "react";
export default function SignUpForm() {
    const [form, setFrom] = useState({
        userName:'', 
        email: '',
        password: '',
        confirmPassword: ''});
    const handleSubmit = (e) => {
        const infor = form.userName && form.email && form.password && form.confirmPassword;
          return infor? alert('Sign up successfully!!!') : alert('Please fill out all the fields!!!');
    }
    const handleChange = (e) => {
        setFrom({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    return (
        <div className="container">
            <h1>Sign Up</h1>
                <div>
                <p>User Name</p>
                <input type="text" name="userName" onChange={handleChange} value={form.userName || ''} />
                </div>
                <div>
                <p>Email</p>
                <input type="email" name="email" onChange={handleChange} value={form.email || ''}/>
                </div>
                <div>
                <p>Password</p>
                <input type="text" name="password" onChange={handleChange} value={form.password || ''}/>
                </div>
                <div>
                <p>Confirm Password</p>
                <input type="text" name="confirmPassword" onChange={handleChange} value={form.confirmPassword || ''}/>
                </div>
                <input type='button' onClick={handleSubmit} value="Submit"/>
        </div>
    )
}