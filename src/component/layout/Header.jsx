import { Container, Nav, Navbar } from "react-bootstrap";


export default function Header(){
return(<>

<Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/login">login</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
</>)
}
