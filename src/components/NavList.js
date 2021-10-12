import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavListWrapper = styled.ul`
  list-style: none;
  // display: grid;
  // grid-template-columns: repeat(6, 1fr);
  display: grid;
  justify-self: end;
  // justify-content: space-between;
  align-content: center;
  grid-auto-flow: column;
  grid-gap: 1.5em;
`;

export const NavListLink = styled(Link)`
  color: whitesmoke;
  text-decoration: none;

  &.active {
    color: cadetblue;
    text-decoration: underline;
  }
`;

export default function NavList() {
  return (
    <NavListWrapper>
      <li className="nav-item">
        <NavListLink to="/about">About us</NavListLink>
      </li>
      <li className="nav-item">
        <NavListLink to="/products">Our Products</NavListLink>
      </li>
      <li className="nav-item">
        <NavListLink to="/professionals">Professionals</NavListLink>
      </li>
      <li className="nav-item">
        <NavListLink to="/patients">Patients</NavListLink>
      </li>
      <li className="nav-item">
        <NavListLink to="/news">News &amp; Events</NavListLink>
      </li>
      <li className="nav-item">
        <NavListLink to="/contact">Contact us</NavListLink>
      </li>
    </NavListWrapper>
  );
}
