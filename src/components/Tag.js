import React from 'react';
import styled from 'styled-components';

const TagStyles = styled.div`
  .col {
    margin: 1.8rem 0;
    display: flex;
    .col1 {
      flex: 1;
      margin-right: 3rem;
      h2 {
        font-size: 2.4rem;
      }
    }
    .col2 {
      flex: 6;
      display: flex;

      .tag {
        background-color: var(--deep-dark);
        margin-right: 1.5rem;
        padding: 1rem 2rem;
        border-radius: 5px;
        p {
          font-family: 'Montserrat Regular';
          letter-spacing: 0.1rem;
          font-size: 1.5rem;
        }
      }
    }
  }
`;

export default function Tag({ text = ['Text'], title = 'Title' }) {
  console.log(text);
  return (
    <TagStyles>
      <div className="col">
        <div className="col1">
          <h2>{title}</h2>
        </div>
        <div className="col2">
          {text.map((data) => (
            <div className="tag">
              <p>{data}</p>
            </div>
          ))}
        </div>
      </div>
    </TagStyles>
  );
}
