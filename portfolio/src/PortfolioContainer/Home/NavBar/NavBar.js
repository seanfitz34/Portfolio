import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";

function ColorSchemesExample() {
  return (
    <>
      <Navbar variant="light">
        <Container>
          <Navbar.Brand href="#home">No Stack To Full Stack</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About Me</Nav.Link>
            <Nav.Link href="#resume">Resume</Nav.Link>
            <Nav.Link href="#contact">Contact Me</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
