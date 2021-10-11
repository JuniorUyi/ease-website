import React from 'react';
import styled from 'styled-components';

import { Button } from './Button';
import Logo from './Logo';
import NavList from './NavList';

const NavContainer = styled.nav`
  background-color: #23d5ab;
  display: grid;
  grid-auto-flow: column;
  // grid-template-columns: 1fr 3fr;
  align-items: center;
  // align-content: space-evenly;
  // grid-gap: 1.5em;
  // height: 50px;
  padding-top: 1rem;
  overflow: hidden;
`;

export default function Navbar() {
  return (
    <NavContainer className="navbar">
      <Logo />
      <NavList />

      <Button type="button" primary>
        Login
      </Button>
    </NavContainer>
  );
}
