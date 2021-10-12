import styled, { css } from 'styled-components';

import React from 'react';

const Btn = styled.button`
  background: transparent;
  border-radius: 1em;
  border: 1px solid #fff;
  color: #fff;
  margin: 0.5em 1em;
  padding: 0.5em 1em;

  &:hover {
    background: #fff;
    color: #111;
  }

  ${(props) =>
    props.primary &&
    css`
      background: lightblue;
      color: white;
    `}
`;

// eslint-disable-next-line react/prop-types
export default function Button({ children }) {
  return <Btn type="button">{children}</Btn>;
}
