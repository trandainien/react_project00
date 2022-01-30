import React from 'react';
import styled from 'styled-components';

const TestimonialItemStyles = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 3rem 0;
  margin-bottom: 2rem;
  background-color: var(--deep-dark);
  border-radius: 10px;

  .testimonial_info {
    letter-spacing: 0.2rem;
    line-height: 2rem;
    width: 70%;
    margin: 0 auto;
    p:first-child {
      text-align: left;
    }
    p {
      font-size: 1.6rem;
      font-family: 'RobotoMono Regular';
    }
    h3 {
      font-family: 'Montserrat Bold';
      font-size: 2.2rem;
      margin-top: 3rem;
      margin-bottom: 1rem;
    }
  }
`;

export default function TestimonialItem({
  name = 'Name',
  desc = 'description',
  title = 'title',
  org = '........................',
}) {
  return (
    <TestimonialItemStyles>
      <div className="testimonial_info">
        <p>{desc}</p>
        <h3>{name}</h3>
        <p>{title}</p>
        <p>{org}</p>
      </div>
    </TestimonialItemStyles>
  );
}
