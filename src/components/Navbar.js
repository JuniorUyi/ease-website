import React from 'react';
import styled from 'styled-components';

import { Button } from './Button';
import Logo from './Logo';
import NavList from './NavList';

const NavContainer = styled.nav`
  display: grid;
  grid-auto-flow: column;
  background-color: #23d5ab;
  grid-template-columns: 1fr 3fr;
  align-items: center;
  align-content: space-evenly;
  grid-gap: 1.5em;
  padding-top: 1rem;
  overflow: hidden;
`;

export default function Navbar() {
  return (
    <NavContainer>
      <Logo />
      <NavList />

      <Button type="button" primary>
        Login
      </Button>
    </NavContainer>
  );
}
