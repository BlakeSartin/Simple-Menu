
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


function NavbarComponent() {
  return(
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home">Burger Boy</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Menu" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Classics</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Chef Specials</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Drinks</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Deserts</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Sides</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavbarComponent