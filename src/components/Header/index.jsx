import Botao from "./../Botao/index";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavBarStyle } from "./style";
import "./style.css";

function Header() {
  return (
    <div className="navbarContainer">
      <NavBarStyle expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="/comunidades">LOGO</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Form className="navForm">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Botao texto={"Search"} />
            </Form>
            <Nav className="navDrops" navbarScroll>
              <NavDropdown title="Acessibility" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Usuario"
                id="navbarScrollingDropdown"
                className="navDropDown"
              >
                <NavDropdown.Item className="dropItem" href="#action3">
                  Peril
                </NavDropdown.Item>
                <NavDropdown.Item className="dropItem" href="#action4">
                  Avisos
                </NavDropdown.Item>
                <NavDropdown.Item className="dropItem" href="#action5">
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </NavBarStyle>
      <h1 className="tituloComu">Comunidades</h1>
    </div>
  );
}

export default Header;
