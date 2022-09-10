import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import Calculator from './Components/Calculator'
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<Calculator />);
