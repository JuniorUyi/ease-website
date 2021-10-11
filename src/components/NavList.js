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

export default function NavList() {
  return (
    <NavListWrapper>
      <li className="nav-item">
        <Link to="/about">About us</Link>
      </li>
      <li className="nav-item">
        <Link to="/products">Our Products</Link>
      </li>
      <li className="nav-item">
        <Link to="/professionals">Professionals</Link>
      </li>
      <li className="nav-item">
        <Link to="/patients">Patients</Link>
      </li>
      <li className="nav-item">
        <Link to="/news">News &amp; Events</Link>
      </li>
      <li className="nav-item">
        <Link to="/contact">Contact us</Link>
      </li>
    </NavListWrapper>
  );
}
