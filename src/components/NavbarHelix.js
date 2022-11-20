import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function NavbarHelix({askQuestionAction}) {

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Helix</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
        <Button onClick={() => askQuestionAction()} variant="outline-primary">Ask a question</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarHelix;