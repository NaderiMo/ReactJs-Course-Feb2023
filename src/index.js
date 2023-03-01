import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Clock from './components/Clock';
// import CardList from './components/CardList';
// import Counter from './components/Counter';
import Login from './components/Login';
import reportWebVitals from './reportWebVitals';
import { Container } from 'react-bootstrap';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*<Card cardNo={"000000000"} type="bon card"/>*/}
    {/* <CardList /> */}
    {/* <Counter/> */}
    {/* <Clock/> */}

    <Container fluid>
      <Row>
        <Col>
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
