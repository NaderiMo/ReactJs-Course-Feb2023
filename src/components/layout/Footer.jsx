import { Col, Container, Row } from "react-bootstrap";
import footer from "./footer.module.css"

export default function Footer() {
    return (<>
        <Container fluid className={`${footer.container} ${footer.bgYellow}`} >
            <Row>
                <Col>Col 1</Col>
                <Col>Col 2</Col>
                <Col>Col 3</Col>
                <Col>Col 4</Col>
            </Row>
        </Container>
    </>)

}

