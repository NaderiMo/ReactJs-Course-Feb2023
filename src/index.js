import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Col, Container, Row } from 'react-bootstrap';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from 'react-router-dom';
import router from './configs/routers';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import userReducer from './store/userSlice';

const root = ReactDOM.createRoot(document.getElementById('root'));

const reduxStore = configureStore({
  reducer: {
    users:userReducer
  }
});

root.render(
  <React.StrictMode>
    {/* <Container fluid>
      <Row>
        <Col md={3} xs={6}>
          <Login/>
        </Col>
      </Row>
    </Container> */}

    <Provider store={reduxStore}>
      <RouterProvider router={router} />
    </Provider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
