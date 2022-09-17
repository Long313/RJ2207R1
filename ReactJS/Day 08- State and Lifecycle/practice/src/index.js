import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ChangeBackgroudColor from './components/ChangeBackgroudColor';
import App from './components/App';
import LoginAndLogOut from './components/LoginAndLogOut';
import ComponentExpant from './components/ComponentExpant';
import Calculator from './components/Calculator';
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import StudentManagement from './components/StudentManagement';
const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<ChangeBackgroudColor/>)
// root.render(<App/>)
// root.render(<LoginAndLogOut/>);
root.render(<ComponentExpant/>)
// root.render(<Calculator />)
// root.render(<Form/>)
// root.render(<TodoList/>);
// root.render(<StudentManagement/>);