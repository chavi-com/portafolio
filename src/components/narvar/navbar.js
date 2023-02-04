import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './navbar.css';

//import Perfil from '../fotoperfil/fotoperfil';

function BasicExample() {
  return (
    <Navbar className={'menu'} bg="" expand="lg">

      <Container>
        
        <Navbar.Brand className={'letras'} href={"./perfil.js"}>Desarrollador web  </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
            <NavDropdown className={'letras'} title="Mas" id="basic-nav-dropdown">
             
              <NavDropdown.Item href="#action/3.3">Redes sociales y de contacto</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://github.com/chavi-com" src="https://github.com/chavi-com">
                Github: https://github.com/chavi-com
              </NavDropdown.Item>
              <NavDropdown.Item href="https://wa.me/message/D2A4Q5LLS5AOG1" src="">
                whatsapp: +57 3052102814
              </NavDropdown.Item>
              <NavDropdown.Item href="https://www.linkedin.com/in/edison-chavarria-2441a123a/" src="">
                linkedin: https://www.linkedin.com/in/edison-chavarria-2441a123a/
              </NavDropdown.Item>
              <NavDropdown.Item href="mailto:edizonchavi@gmail.com" src="">
                Gmail: edizonchavi@gmail.com
              </NavDropdown.Item>
              
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;