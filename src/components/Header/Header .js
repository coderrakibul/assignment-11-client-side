import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';




const Header  = () => {
  const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }

    return (
      <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand as={Link} to="/">Bike Corner</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
      <Nav.Link as={Link} to="/home">Home</Nav.Link>
      
     
      {

user?
<Nav.Link onClick={handleSignOut} >Signout</Nav.Link> 
:
<Nav.Link as={Link} to="/login">Login</Nav.Link>

}
     
    </Nav>
    
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;