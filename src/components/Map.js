import React from 'react';
import styled from 'styled-components';
import PText from './PText';
import MapImg from '../assets/images/map.png';

const MapStyles = styled.div`
  margin-top: 10rem;
  background: url(${MapImg}) no-repeat center / cover;

  min-height: 400px;
  .container {
    position: relative;
    min-height: 400px;
  }
  .map__card {
    position: absolute;
    right: 10%;
    bottom: 10%;
    padding: 2rem;
    background: var(--deep-dark);
    width: 100%;
    max-width: 300px;
    border-radius: 12px;
  }
  .map__card__heading {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  .map__card__link {
    font-size: 1.6rem;
    display: inline-block;
    margin-top: 3rem;
    text-decoration: underline;
  }
  @media only screen and (max-width: 500px) {
    background-position: 80% center;
  }
`;

export default function Map() {
  return (
    <MapStyles>
      <div className="container">
        <div className="map__card">
          <h3 className="map__card__heading">Here is me</h3>
          <PText text="Ha Noi City" />
          <a
            href="https://www.notion.so/Diary-f864e19c926d40dea92490b1c07023ea"
            target="_blank"
            rel="noopener noreferrer"
            className="map__card__link"
          >
            Open in Google Map
          </a>
        </div>
      </div>
    </MapStyles>
  );
}
