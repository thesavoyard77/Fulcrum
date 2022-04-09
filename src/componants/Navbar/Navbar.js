import React, { useState } from 'react';
import { Navbar, Nav, Container, NavDropdown, Form, FormControl, Button, Offcanvas} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import './Navbar.css'

const NavComponant = () => {

   
    const [ modalIsOpen, setModalIsOpen ] = useState(false)
      return (
          <>
            <Navbar variant="light" expand="lg" className="color-nav">
            <Container>
                <Navbar.Brand href="/">Fulcrum Collaborations</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="https://github.com/thesavoyard77/Fulcrum">Github Repo</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
          </>
      )
  }
  
  export default NavComponant;