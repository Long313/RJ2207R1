import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import StateIntro from './Components/StateIntro';
import CountButton from './Components/CountButton';
import ActionLink from './Components/ActionLink';
import LifeCycle from './Components/LifeCycle';
import ConditionalRender from './Components/ConditionalRender';
const root = ReactDOM.createRoot(document.getElementById('root'));
// const container = document.getElementById('root');
// const root = createRoot(container);
// root.render(<StateIntro />);
// root.render(<CountButton />);
// root.render(<LifeCycle />);
// setTimeout(() => {
//     root.unmount();
// },10000)
root.render(<ConditionalRender/>)
