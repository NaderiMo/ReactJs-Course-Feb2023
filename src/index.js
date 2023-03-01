import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import CardList from "./component/CardList";
// import clock from "./component/Clock";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Countainer , Row ,Col} from 'react';
  



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode>
  {/* <App /> */}
  {/* <Clock/> */}
  <CardList/>
  </React.StrictMode>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
