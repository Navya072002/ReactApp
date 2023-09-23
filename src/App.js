import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarStyles = styled.nav
  display:flex;
  justify-content : center;
  align-items: center;
  height: 10vh;
  background-color: #333;
  color: #fff;

  a{
    color : #fff;
    text-decoration : none;
  }
;

const FooterStyles = styled.footer
  display:flex;
  justify-content : center;
  align-items : center;
  height: 10vh;
  background-color: #333;
  color: #fff;

  p{
    margin: 0;
  }
;

function App() {
  return (
    <div>
      {/* Navbar */}
      <NavbarStyles>
        <Link to="/">Home</Link>
        <Link to="/">Products</Link>
        <Link to="/">Cart</Link>
      </NavbarStyles>

      {/* Main content goes here */}

      {/* Footer */}
      <FooterStyles>
        <p>Made by Navya Arora</p>
      </FooterStyles>
    </div>
  );
}

export default App;