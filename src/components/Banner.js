import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import SectionTitle from './SectionTitle';

const BannerStyles = styled.div`
  .container {
    width: 100%;
  }
  .heading {
    width: 100%;
    text-align: center;
    margin: 0 auto;
    background-color: var(--deep-dark);
    margin-top: 10rem;
    padding: 5rem 4rem;
    border-radius: 20px;
  }
`;

export default function Banner() {
  return (
    <BannerStyles>
      <div className="container">
        <div className="heading">
          <SectionTitle
            heading="Let me help you"
            subheading="Have a project in mind"
          />
          <Button btnText="Contact Now" />
        </div>
      </div>
    </BannerStyles>
  );
}
