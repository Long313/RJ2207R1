import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import BMI from './practice/BMI';
import reportWebVitals from './reportWebVitals';
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import BMICalculator from './practice/BMICalculator';
const root = ReactDOM.createRoot(document.querySelector('#root'));
// root.render(<BMI/>);
root.render(<BMICalculator />);
