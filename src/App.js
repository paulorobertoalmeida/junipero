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

const MainContainer = styled.div`
margin = 0;
background-color: #70C1B3;
`;

function App() {
  return(
    <MainContainer>
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
    <HomePage />
    <Footer>
    <FooterText>
      <p>Junipero</p>
      </FooterText>
    </Footer>
    </MainContainer>
  );
}

export default App;