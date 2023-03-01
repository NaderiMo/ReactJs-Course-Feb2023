import React from 'react';
import ReactDOM from 'react-dom/client';
import CardList from './components/CardList';
import Clock from './components/Clock'
import Counter from './components/Counter';
import './index.css'; 
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import {Container,Row,Col} from 'react-bootstrap';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Counter/>
    <CardList/>
    <Clock/> */}
    
    <Container>
      <Row>
        <Col md={3} xs={5}>
        <Login/>
        </Col>
      </Row>
    </Container>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
