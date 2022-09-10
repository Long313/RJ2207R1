import React from "react";
import '../App.css';
import Input from './Input';
import Button from './Button';
class StudentManagement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            studentList: [],
            form: { name: '', phone: '', email: ''},
            isValid: false,
            indexSelected: -1
        }
    }
    render() {
        return (
            <div>
                <h1>Student List</h1>
                <Input label='Name: ' />
                <Input label='Phone: ' />
                <Input label='Email: ' />
                <Button label='Submit' />
            </div>
        )
    }
}
export default StudentManagement;
