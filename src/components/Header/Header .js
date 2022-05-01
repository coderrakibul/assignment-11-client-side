import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header  = () => {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand as={Link} to="/">Bike Corner</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
      <Nav.Link as={Link} to="/home">Home</Nav.Link>
     
    </Nav>
    
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header ;