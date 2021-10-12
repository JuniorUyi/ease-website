import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const Div = styled.div`
  /* background: rgba(210, 123, 34, 1); */
  /* border: 1px solid black; */
  border: 1px solid black;
  border-radius: 1em;
  text-align: center;
`;

export default function Box() {
  return (
    <Div>
      <p>Content</p>
      <Button>See more</Button>
    </Div>
  );
}
