import React from 'react';
import styled from 'styled-components';

const SectionWrapper = styled.section`
  /* display: flex; */
  /* justify-content: space-around; */
  /* align-items: center; */
  width: 50%;
  margin: auto;
  display: grid;
  background: royalblue;
  grid-template-columns: repeat(3, 1fr);
`;

// eslint-disable-next-line react/prop-types
export default function Section({ children }) {
  return <SectionWrapper>{children}</SectionWrapper>;
}
