import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import CardList from './components/CardList';
import Clock from './components/Clock';
import Counter from './components/Counter';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row ,Container,Col} from 'react-bootstrap';
import { RouterProvider } from "react-router-dom"
import router from './configs/router';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
 {/* <Container fluid>
  <Row>
    <Col md={3} xs={6}>
      <Login />
    </Col>
  </Row>
 </Container> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
