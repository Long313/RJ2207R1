import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);
// root.render(<App />);
const name = React.createElement('h1',{id:'name'},"My name is Long");
root.render(name);
var tablet = React.createElement('table',{id:'table'},
                React.createElement('tr',null,
                    React.createElement('td',null,'cột 1'),
                    React.createElement('td',null,'cột 2')),
                React.createElement('tr',null,
                  React.createElement('td',null,'cột 1, hàng 2'),
                  React.createElement('td',null,'cột 2,hàng 2'))
                )

var tableJSX = (
  <table>
    <tr>
      <td>cột 1, hàng 1</td>
      <td>cột 2, hàng 1</td>
    </tr>
    <tr>
      <td>cột 1, hàng 2</td>
      <td>cột 2, hàng 2</td>
    </tr>
  </table>
)
// root.render(tableJSX);

const fruits = ['Apple', 'Banana', 'Orange', 'Black Berry'];

const fruitElement = (
  <div className='container'>
      <h1>List fruits</h1>
      <ul>
        {
          fruits.map((fruit,index) => <li key={index}>{fruit}</li>)
        }
      </ul>
  </div>
)
// root.render(fruitElement);
// time = learn demo
const tick = () => {
const now = new Date();
root.render(
  <div className="container">
        <h1>Hello, world</h1>
        <p>It is{now.toLocaleTimeString()}</p>
      </div>
);
}
setInterval(tick,1000);

// import reportWebVitals from './reportWebVitals';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
