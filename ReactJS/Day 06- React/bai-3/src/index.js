import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

const card = (
  <div className="container">
    <div className="heading">
    </div>
    <div className="body">
      <img src="https://www.seekpng.com/png/detail/861-8617871_baby-crying-png-crying-baby-face-png.png" alt=""/>
    <h2>Ruma Khan</h2>
    <p>Lorem ipsum is simply dummy text of the printing and typesetting industry</p>
    <button type="">FOLLOW</button>
    </div>
  </div>
)
root.render(card);