import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import { ValidateFormLogin } from './Components/ValidateFormLogin';
import { ContactForm } from './Components/ContactForm';
import BookLibrary from './Components/BookLibrary';
const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<ValidateFormLogin/>);
// root.render(<ContactForm/>);
root.render(<BookLibrary/>)