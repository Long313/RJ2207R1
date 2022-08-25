import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import FunctionComponent from './components/FunctionComponent';
import Alert from './components/Alert';
import StudentInfor from './components/StudentInfor';
import BMICaculator from './components/BMICaculator';
const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<FunctionComponent firstNumber={5} secondNumber={2} />);
// Bai tap 1
// root.render(<Alert text="Cảnh báo! Tài nguyên bạn vừa truy cập không tồn tại.
// " className="alert alert-warning" role="alert"/>)

// Bai tap 2
root.render(<StudentInfor />)
// root.render(<BMICaculator/>)
