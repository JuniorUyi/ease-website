/* eslint-disable react/prop-types */
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
