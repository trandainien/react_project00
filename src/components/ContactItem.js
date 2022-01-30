import React from 'react';
import styled from 'styled-components';
import PText from './PText';

const ContactItemStyles = styled.div`
  .col_container {
    background-color: var(--deep-dark);
    display: flex;
    padding: 4rem 3rem;
    margin: 0 2rem 2.5rem 4rem;
    border-radius: 10px;

    align-items: center;

    .icon {
      background-color: var(--gray-2);
      padding: 2rem;
      border: none;
      border-radius: 50%;
    }
    svg {
      width: 3.5rem;
    }

    .info {
      margin-left: 4rem;
      display: flex;
      align-items: center;
      justify-content: left;
    }
    .para {
      margin: 0;
    }
  }
`;

export default function ContactItem({ icon = 'empty', content = 'content' }) {
  return (
    <ContactItemStyles>
      <div className="col_container">
        <div className="icon">{icon}</div>
        <div className="info">
          <PText text={content} />
        </div>
      </div>
    </ContactItemStyles>
  );
}
