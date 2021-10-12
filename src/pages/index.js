import * as React from 'react';
import styled from 'styled-components';
import Box from '../components/Box';
import Section from '../components/Section';
import '../styles/styles.scss';

const healthCare = [];

// markup
const IndexPage = () => (
  <div>
    <title>Home Page</title>
    <h1>Hello</h1>
    <Section>
      {new Array(3).fill(0).map((elm, i) => (
        <Box key={i} />
      ))}
    </Section>
  </div>
);

export default IndexPage;
