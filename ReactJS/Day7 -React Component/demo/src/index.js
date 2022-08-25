import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Headline from "./components/Headline";
import News from "./components/News";
import Hello from "./components/Hello";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "./components/Button";
import HeadlineClass from "./components/HeadlineClass";
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<News/>)
// root.render(
//   <div className="container pt-3">
//     <Button onClick={() => console.log(123)} className="btn btn-primary" label="Button 1" />
//     <Button className="btn btn-warning" label="Button 2" />
//   </div>
// );
root.render(<HeadlineClass title="test title"/>)