import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Container, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./component/Login";
import Rout from "./component/router/Rout";
import Auth from "./component/router/Auth";
import Index from "./component/router/Index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Rout path='/login'>
      <Login />
    </Rout>

    <Rout path='/auth'>
      <Auth />
    </Rout>

    <Rout path='/'>
      <Index />
    </Rout>

    <Container fluid>
      <Row>
        <Col md={3} xs={6}>
          {/* <Login /> */}
        </Col>
      </Row>
    </Container>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
