/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';

const LayoutWrapper = styled.div`
  min-height: 100vh;
  margin: 0;

  display: grid;
  grid-template-rows: auto 1fr auto;
`;

export default function Layout({ children }) {
  return (
    <LayoutWrapper>
      <Header />
      <main>{children}</main>
      <Footer />
    </LayoutWrapper>
  );
}
