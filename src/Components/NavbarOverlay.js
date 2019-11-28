import React from 'react'
import { Button, Navbar, Form, FormControl, Nav } from 'react-bootstrap'
import {ReactComponent as Logo} from './ForensX.svg'

export default function NavbarOverlay() {
    return (
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">
      <img
        src= {Logo}
        width = "30"
        height = "30"
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
