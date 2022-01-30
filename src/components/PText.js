import React from 'react';
import styled from 'styled-components';

const PStyle = styled.div`
  max-width: 500px;
  margin: 0 auto;
  font-size: 1.8rem;
  line-height: 1.3em;
  @media only screen and (max-width: 768) {
    font-size: 1.4rem;
  }
`;

export default function PText({ text = 'This is text section' }) {
  return (
    <PStyle className="para">
      <p>{text}</p>
    </PStyle>
  );
}
