import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      {/* <CardList></CardList>
      <Clock />
      <Counter /> */}
      <Container fluid>
        <Row>
          <Col md={3} xs={6}>
            <Login />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
