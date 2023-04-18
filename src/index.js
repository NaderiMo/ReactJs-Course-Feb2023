import React from 'react';
import { Col, Container ,Row} from 'react-bootstrap';
import ReactDOM from 'react-dom/client';
import CardList from './components/CardList';
import Clock from './components/Clock';
import Counter from './components/Counter';
import 'bootstrap/dist/css/bootstrap.min.css';
import configureStore from "@reduxjs/toolkit";
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './components/Login';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import {userReducer} from "./store/userSlice"
const reduxStore=configureStore({
  reducer:{
    users:userReducer
  }
})
const router = createBrowserRouter([
  {path:"/",
  element:(<div>hello</div>)
},
{path:"/login",
element:(<Login/>)
}
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      {/* <CardList/> */}
      {/* <Counter/> */}
      {/* <Container fluid>
        <Row>
          <Col md={3} xs={6}>
            <Login/>
          </Col>
        </Row>
      </Container> */}
   {/* <Clock/> */}
   <RouterProvider router={router}/> 

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
