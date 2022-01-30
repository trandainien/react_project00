import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Img from '../assets/images/about-page-img.png';
import Button from '../components/Button';
import Tag from '../components/Tag';
import AboutInfo from '../components/AboutInfo';
import Banner from '../components/Banner';

const AboutStyles = styled.div`
  margin-top: 8rem;
  .column {
    display: flex;
    .col1 {
      flex: 1.3;
      letter-spacing: 0.2rem;
      h1 {
        margin: 2rem 0;
        font-size: 2.8rem;
      }
      h2 span {
        background-color: var(--deep-dark);
        padding: 0.5rem 1rem 0.5rem;
        text-align: center;
        border-radius: 10px;
      }
      .para {
        margin: 0;
      }
      .button-wrapper {
        margin-top: 4rem;
      }
    }
    .col2 {
      flex: 1;
      img {
        width: 80%;
        object-fit: cover;
        margin-left: 4rem;
        border: 2px solid white;
        border-radius: 5px;
      }
    }
  }
  .experiences {
    margin-top: 10rem;
    h1 {
      font-size: 3.6rem;
      text-transform: uppercase;
    }
  }
  .aboutInfo {
    margin-bottom: 5rem;
  }

  @media only screen and (max-width: 768px) {
    .column {
      flex-direction: column;
      line-height: 1.2;
      .col1 {
        width: 80%;
        margin: 0 auto;
      }
      .col2 {
        img {
          margin-top: 5rem;
        }
      }
    }

    .col {
      flex-direction: column;
      .col2 {
        margin-top: 2rem;
        margin-bottom: 4rem;
      }
    }
  }
`;

export default function About() {
  return (
    <AboutStyles>
      <div className="container">
        <div className="column">
          <div className="col1">
            <h2>
              Hi, I am <span>Tran Dai Nien</span>
            </h2>
            <h1>A freelance Web Developer</h1>
            <PText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ." />
            <br />
            <PText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ." />
            <br />
            <PText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ." />
            <Button btnText="Download CV" />
          </div>
          <div className="col2">
            <img src={Img} alt="img" />
          </div>
        </div>

        <div className="experiences">
          <AboutInfo
            heading="Education"
            subheading={[
              {
                title: 'School',
                text: ['Mac Dinh Chi High School'],
              },
              {
                title: 'College',
                text: ['University Of Science'],
              },
              {
                title: 'Address',
                text: [
                  '227 Đ. Nguyễn Văn Cừ, Phường 4, Quận 5, Thành phố Hồ Chí Minh',
                ],
              },
            ]}
          />
          <AboutInfo
            heading="My Skills"
            subheading={[
              {
                title: 'FrontEnd',
                text: ['HTML', 'CSS', 'Javascript', 'React'],
              },
              {
                title: 'BackEnd',
                text: ['Node', 'Express', 'PHP'],
              },
              {
                title: 'Design',
                text: ['Photoshop', 'After Effect', 'Figma'],
              },
            ]}
          />
          <AboutInfo
            heading="Experiences"
            subheading={[
              {
                title: '2010-2012',
                text: ['Junior developer at web cifar'],
              },
              {
                title: '2012-2016',
                text: ['Front end developer at web cifar'],
              },
            ]}
          />
        </div>

        <Banner />
      </div>
    </AboutStyles>
  );
}
