import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css';
import '../style.css'

function NavbarComponent() {
  return (
    <>
      <Navbar  data-bs-theme="dark" className='navbar-background'>
        <Container>
          <Navbar.Brand href="#home">JAK-tech</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">HO-Update</Nav.Link>
            <Nav.Link href="#features">Claims</Nav.Link>
            <Nav.Link href="#pricing">Inventory</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      
    </>
  );
}

export default NavbarComponent;