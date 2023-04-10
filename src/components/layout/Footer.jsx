import { Container, Row, Col } from "react-bootstrap";
import style from "./footer.module.css";

export default function Footer() {
    return (
        <Container fluid className={`${style.container} ${style.bgYellow}`}>
            <Row>
                <Col>col 1</Col>
                <Col>col 2</Col>
                <Col>col 3</Col>
                <Col>col 4</Col>
            </Row>
        </Container>
    );
}