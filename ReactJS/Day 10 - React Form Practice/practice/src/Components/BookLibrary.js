import { useState } from "react";
import {ErrorMessage, Formik,Form, Field} from 'formik';
import * as Yup from 'yup';
const booksSchema = Yup.object().shape({
    title: Yup.string().required(),
    author: Yup.string().required(),
    quantity: Yup.number().min(1).max(100).required(),
})
export default function BookLibrary() {
    const [form, setForm] = useState({title: '', author: '', quantity: ''})
    const [bookShelf, setBookShelf] = useState([
        {title: 'Rung than khoc', author: 'Thuc Linh', quantity: 3},
        {title: 'Khe uoc ban dau', author: 'Thuc Linh', quantity: 5}
    ]);
    const [mode, setMode] = useState({status: 'add', action: 'Submit'})
    const deleteBook = (index) => {
        setBookShelf(
            bookShelf.filter((currentValue,key) => key != index)
        )
    }
    const editBook = (index) => {
        setMode({status: 'edit', action: 'Edit', selectIndex: index});
        setForm(bookShelf[index]);
    }
    const handleChange = (e) => {
        setForm({...form,[e.target.name] : e.target.value})
    }
    return (
        <div className='container pt-3'>
            <Formik
            initialValues={form}
            validationSchema={booksSchema}
            enableReinitialize={true}
            onSubmit={ (value,{resetForm}) => {
                if(mode.status === 'add') {
                    bookShelf.push(value)
                    setBookShelf([...bookShelf])
                    resetForm();
                } else {
                    bookShelf[mode.selectIndex] = value;
                    setBookShelf([...bookShelf]);
                    setMode({status: 'add', action: 'Submit', selectIndex: null});
                    resetForm();
                }
                
            }}
            >
                <Form>
                    <Field name='title' placeholder='Enter a title' value={form.title || ''} onChange={handleChange}/>
                    <br/>
                    <ErrorMessage component='div' className="text-danger" name='title'></ErrorMessage>
                    <br/>
                    <Field name='author' placeholder='Enter a author' value={form.author || ''} onChange={handleChange}/>
                    <br/>
                    <ErrorMessage component='div' className="text-danger" name='author'></ErrorMessage>
                    <br/>
                    <Field name='quantity' placeholder='Enter a quantity' value={form.quantity || ''} onChange={handleChange}/>
                    <br/>
                    <ErrorMessage component='div' className="text-danger" name='quantity'></ErrorMessage>
                    <br/>
                    <button type='submit' className="btn btn-success my-3">{mode.action}</button> 
                    <button type='reset' className='btn btn-secondary mx-1'>Reset</button>
                </Form>
            </Formik>
            <table className ='table table-bordered table-hover table-striped'>
                <thead>
                    <tr>
                        <th>Tiêu đề</th>
                        <th>Tác giả</th>
                        <th>Số lượng</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {bookShelf.map((book, index) => (
                        <tr key={index}>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.quantity}</td>
                            <td>
                                <button className='btn btn-primary mx-1' onClick={() => editBook(index)}>Edit</button>
                                <button className='btn btn-danger' onClick={() => deleteBook(index)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}