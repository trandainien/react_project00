import React from 'react';
import styled from 'styled-components';
import Tag from './Tag';

const AboutInfoStyles = styled.div`
  h1 {
    margin-bottom: 3rem;
  }
`;

export default function AboutInfo({
  heading = 'heading',
  subheading = [
    {
      title: 'title',
      text: ['text1', 'text2'],
    },
  ],
}) {
  return (
    <AboutInfoStyles className="aboutInfo">
      <h1>{heading}</h1>
      {subheading.map((data, index) => (
        <Tag key={index} title={data.title} text={data.text} />
      ))}
    </AboutInfoStyles>
  );
}
