import React from 'react';
import { Link } from 'gatsby';
// import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import surgease from '../images/surgease.png';

const Container = styled.div`
  width: 200px;
  padding: 0.5rem 0;
`;

const Image = styled.img`
  height: auto;
  width: 100%;
  justify-self: start;
  margin-left: 20px;
`;

export default function Logo() {
  return (
    <Container>
      <Link to="/">
        <Image src={surgease} alt="Surgease Logo" />
      </Link>
    </Container>
  );
}
