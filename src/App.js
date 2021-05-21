import React from 'react';
import { Button, Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components'

import HomePage from './components/HomePage/Homepage'

// import { Container } from './styles';

const Footer = styled.div`
margin: 10px;
padding: 10px;
`;

const FooterText = styled.div`
margin: auto;
padding: auto;
`;

function App() {
  return(
    <div>
    <Navbar bg="light" variant="light">
      <Navbar.Brand href="#home">Junipero</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Docs</Nav.Link>
        <Nav.Link href="#features">Lands</Nav.Link>
        <Nav.Link href="#pricing">Renting</Nav.Link>
        <Nav.Link href="#pricing">Minting</Nav.Link>
      </Nav>
      <Form inline>
      <Button variant="outline-primary">Connect Wallet</Button>
    </Form>
    </Navbar>
      <h1>Hello wold</h1>
    <HomePage />
    <Footer>
    <FooterText>
      <p>Junipero</p>
      </FooterText>
    </Footer>
    </div>
  );
}

export default App;