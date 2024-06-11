import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../assets/logo.png';


function AppHeader() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
        <img src={Logo} alt="Minha Imagem" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown
            className='dropdown'
              id="nav-dropdown-dark-example"
              title="Recursos"
              menuVariant=""
            >
              <NavDropdown.Item className=".dropdown-item" href="/instituicao">Instituição</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Programas</NavDropdown.Item>
              <NavDropdown.Item href="#" >Instituição</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" >Recursos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" >Comunicação</NavDropdown.Item>
            </NavDropdown>
            
            <Nav.Link href="#about">sobre nós</Nav.Link>
            <Nav.Link href="#services">Cursos</Nav.Link>
            <Nav.Link href="#works">Notícia</Nav.Link>
            <Nav.Link href="#teams">Docentes</Nav.Link>
            <Nav.Link href="#testimonials">Testemunho</Nav.Link>
            <Nav.Link href="#blog">Eventos</Nav.Link>
            <Nav.Link href="#contact">Contacto</Nav.Link>
            <Nav.Link href="https://portalonline.icsgisabelinha.com/">Portal Online</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppHeader;