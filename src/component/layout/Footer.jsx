import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
export default function Footer() {
  return (
    <>
      <Container fluid className={`${Footer.Container} `}>
        <Row>
          <Col>col 1</Col>
          <Col>col 2</Col>
          <Col>col 3</Col>
          <Col>col 4</Col>
        </Row>
      </Container>
    </>
  );
}
