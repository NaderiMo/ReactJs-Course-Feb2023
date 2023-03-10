import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import Login from "./components/Login";
import Users from "./components/Users";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Layout from "./Layout";
import NoPage from "./NoPage";
import User from "./components/User";

function App() {
  return (
    // <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NoPage />} />
          <Route
            path="Login"
            element={
              <Container fluid>
                <Row>
                  <Col md={3} xs={6}>
                    <Login />
                  </Col>
                </Row>
              </Container>
            }
          />
          <Route path="Users" element={<Users />} />
          <Route path="User" element={<User />} />
          {/* <Route name="User" path="/user" handler={User} /> */}

          {/* <Route exact path="/User" component={User} /> */}

          {/* <Route exact path="User" render={(props) => <User {...props} />} />; */}
        </Route>
      </Routes>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

export default App;
