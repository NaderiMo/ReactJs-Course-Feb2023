import { Col, Container, Navbar, Row, Nav } from "react-bootstrap";

export default function Header() {
    return (<>
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/login1">Login (Axios)</Nav.Link>
                        <Nav.Link href="/login2">Login (req)</Nav.Link>
                        <Nav.Link href="/UserManagement">UserManagement</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>)

}

