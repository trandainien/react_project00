import React from 'react';
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';
import styled from 'styled-components';
import ContactItem from '../components/ContactItem';
import PText from '../components/PText';
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';
import Map from '../components/Map';

const ContactStyles = styled.div`
  .section-title {
    padding: 10rem 0;
  }
  .contact_col_container {
    display: flex;
    .contact_col1 {
      flex: 1;
    }
    .contact_col2 {
      flex: 0;
      height: 40rem;
      flex-basis: 0.2rem;
      content: '';

      background-color: #fff;
    }
    .contact_col3 {
      flex: 1;
      margin-left: 3rem;
      .para {
        margin: 0;
      }
      input,
      textarea {
        width: 100%;
        height: 5%;
        border-radius: 5px;
        padding: 3rem;
        font-size: 2.2rem;
        margin-bottom: 3rem;
        background-color: var(--deep-dark);
        border: none;
        margin-top: 1.2rem;
      }
      textarea {
        height: 30%;
        margin-bottom: 0.5rem;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .contact_col_container {
      flex-direction: column;
      .contact_col2 {
        background-color: transparent;
        margin-bottom: 3rem;
      }
    }
  }
`;
export default function Contact() {
  return (
    <ContactStyles>
      <div className="container">
        <SectionTitle heading="Contact" subheading="get in touch" />
        <div className="contact_col_container">
          <div className="contact_col1">
            <ContactItem icon={<MdPhone />} content="0934114033" />
            <ContactItem icon={<MdEmail />} content="tdnien21@gmail.com" />
            <ContactItem icon={<MdLocationOn />} content="Ha Noi" />
          </div>
          <div className="contact_col2" />
          <div className="contact_col3">
            <PText text="Your Name" />
            <input type="text" />
            <PText text="Your Email" />
            <input type="email" />
            <PText text="Your Message" />
            <textarea />
            <Button btnText="Send" />
          </div>
        </div>
        <Map />
      </div>
    </ContactStyles>
  );
}
