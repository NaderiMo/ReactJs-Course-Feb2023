import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Login from './Login'
import Login2 from './Login2';
import { Col, Container, Row } from 'react-bootstrap';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    {/* <CardList/> */}
    <Container>
      <Row>
        <Col md={3} xs={6}>
          <Login2 />
        </Col>
      </Row>
    </Container>

    {/* <Avator/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
