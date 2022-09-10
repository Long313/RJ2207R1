import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LoginSuccess from './components/LoginSuccess';
import Counter from './components/Counter';
import EnterYourName from './components/EnterYourName';
import { EffectDemo } from './components/EffectDemo';
const root = ReactDOM.createRoot(document.querySelector('#root'));
// root.render(<LoginSuccess/>);
// root.render(<Counter/>);
// root.render(<EnterYourName/>)
root.render(<EffectDemo/>)
