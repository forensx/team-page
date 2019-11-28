import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import ForensXLogo from '../ForensX.png';

export default function NavbarOverlay() {
    return (
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">
      <img
        alt= ''
        src= {ForensXLogo}
        width = "50px"
        height = "50px"
      />
    </Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">About</Nav.Link>
      <Nav.Link href="#features">Services</Nav.Link>
      <Nav.Link href="#pricing">Conctact</Nav.Link>
    </Nav>
  </Navbar>
    )
}