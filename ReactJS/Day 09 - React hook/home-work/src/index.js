import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Counter from './Components/Counter';
import ChoseLanguageProgaming from './Components/ChoseLanguageProgaming';
import Clock from './Components/Clock';
import CarGarage from './Components/CarGarage';
import Timer from './Components/Timer';
import CounterNumber from './Components/CounterNumber';
const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Counter/>);
// root.render(<ChoseLanguageProgaming/>);
// root.render(<Clock/>)
// root.render(<CarGarage/>);
// root.render(<Timer/>);
root.render(<CounterNumber/>);
