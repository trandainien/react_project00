import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PText from './PText';

const FooterStyles = styled.div`
  .background {
    background-color: var(--deep-dark);
    width: 100%;
    margin-top: 6rem;
    .bottom {
      width: 90%;
      margin: 0 auto;
      display: flex;

      padding: 5rem 3rem;

      .developer_info {
        flex: 1.5;
      }
      .important_links {
        flex: 1;
      }
      .contact_info {
        flex: 1;
      }
      .social_link {
        flex: 1;
      }
      .links {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .Item {
          font-size: 1.5rem;
          margin: 0.5rem 0;
        }
      }

      .para {
        line-height: 1.4;
        letter-spacing: 0.1rem;
        margin: 1rem 0;
      }
      h1,
      h2 {
        font-size: 2.5rem;
        margin-bottom: 2rem;
      }
      h2 {
        font-size: 2rem;
        text-align: center;
      }
    }
  }
  .copyright {
    padding: 1rem 3rem;
    font-size: 1.5rem;
    text-align: center;
  }
  @media only screen and (max-width: 768px) {
    .heading {
      width: 80%;
    }

    .background {
      .bottom {
        display: flex;
        flex-direction: column !important;
        .developer_info {
          margin-bottom: 2rem;
        }
        .important_links {
          margin: 2rem 0;
          h2 {
            font-size: 2rem;
            letter-spacing: 0.5rem;
          }
        }
        .contact_info {
          h2 {
            font-size: 2rem;
            letter-spacing: 0.5rem;
          }
        }
        .social_link {
          margin: 2rem 0 0;
          h2 {
            font-size: 2rem;
            letter-spacing: 0.5rem;
          }
        }
        .developer_info h1 {
          font-size: 2.5rem;
        }
      }
    }

    .para {
      font-size: 1.2rem;
    }
    .copyright {
      padding: 1rem;
      font-size: 1.2rem;
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <div className="background">
        <div className="bottom">
          <div className="developer_info">
            <h1>Tran Dai Nien</h1>
            <PText text="A freshman who want to be a web developer and always be enthusiastic at doing job as well as looking forward to a chance for intership" />
          </div>
          <div className="important_links">
            <h2>Important Links</h2>
            <div className="links">
              <Link className="Item" to="/home">
                Home
              </Link>
              <Link className="Item" to="/about">
                About
              </Link>
              <Link className="Item" to="/projects">
                Project
              </Link>
              <Link className="Item" to="/contact">
                Contact
              </Link>
            </div>
          </div>
          <div className="contact_info">
            <h2>Contact Info</h2>
            <PText text="0934114038" />
            <PText text="tdnien21@clc.fitus.edu.vn" />
            <PText text="Freshman at Computer of Science university" />
          </div>
          <div className="social_link">
            <h2>Social Link</h2>
            <div className="links">
              <a
                className="Item"
                href="http://facebook.com"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
              <a
                className="Item"
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
              <a
                className="Item"
                href="https://twitter.com/home?lang=vi"
                target="_blank"
                rel="noreferrer"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        29-1-2022 - made by Tran Dai Nien (follow WEB CIFAR Tutorial)
      </div>
    </FooterStyles>
  );
}
