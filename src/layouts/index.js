/* eslint-disable react/prop-types */
import React from 'react';
import NavBar from '../components/navbar/navbar';

export default function Layout({ children }) {
  return (
    <div>
      {children}
      <NavBar />
    </div>
  );
}
