import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Garage from './components/thuc_hanh_3/Garage';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Login from './components/bai_tap_1/Login';
import Login from './components/bai_tap_2/Login';
import Routing from './components/bai_tap_2/Routing';
const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Garage/>);
// root.render(<Routing/>)
root.render(<Routing/>)