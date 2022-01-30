/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import SwiperCore, { Navigation } from 'swiper';

import styled from 'styled-components';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';
import SectionTitle from './SectionTitle';
import Testimonials from '../assets/data/testimonials';
import TestimonialItem from './TestimonialItem';

SwiperCore.use([Navigation]);

const TestimonialStyles = styled.div`
  text-align: center;
  .testimonial_allItems {
    width: 80%;
    margin: 0 auto;
  }
  .testimonial_heading {
    margin-bottom: 6rem;
  }

  .arrows {
    display: flex;
    justify-content: center;
    .prev {
      margin-right: 3rem;
    }
    .prev,
    .next {
      font-size: 3rem;
      background-color: var(--deep-dark);
      border-radius: 10px;
      padding: 1rem;
      cursor: pointer;
    }
  }

  .fade-enter {
    opacity: 0;
    transform: scale(0.96);
  }
  .fade-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: 250ms ease-in;
    transition-property: opacity, transform;
  }
  .fade-exit {
    opacity: 1;
    transform: scale(1);
  }
  .fade-exit-active {
    opacity: 0;
    transform: scale(0.96);
    transition: 250ms ease-in opacity;
    transition-property: opacity, transform;
  }
`;

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);

  const data = Testimonials[index];

  function goBack() {
    setIndex((val) => (val - 1 < 0 ? Testimonials.length - 1 : val - 1));
    // if (index - 1 < 0) setIndex(Testimonials.length - 1);
    // else setIndex(index - 1);
  }

  function goNext() {
    setIndex((val) => (val + 1 >= Testimonials.length ? 0 : val + 1));
    // if (index + 1 >= Testimonials.length) setIndex(0);
    // else setIndex((index + 1));
  }

  return (
    <TestimonialStyles>
      <div className="container">
        <div className="testimonial_heading">
          <SectionTitle
            heading="Testimonials"
            subheading="see what out clients say about us"
          />
        </div>

        <div className="testimonial__wrapper">
          <SwitchTransition component={null}>
            <CSSTransition key={index} timeout={300} classNames="fade">
              <div className="testimonial_allItems">
                <TestimonialItem
                  name={data.name}
                  desc={data.desc}
                  title={data.title}
                  org={data.org}
                />
              </div>
            </CSSTransition>
          </SwitchTransition>
        </div>
        <div className="arrows">
          <div
            className="prev"
            onClick={goBack}
            role="button"
            tabIndex={0}
            onKeyDown={goBack}
          >
            <MdArrowBack />
          </div>
          <div
            className="next"
            onClick={goNext}
            role="button"
            tabIndex={0}
            onKeyDown={goNext}
          >
            <MdArrowForward />
          </div>
        </div>

        {/* <div className="testimonial_allItems">
          <Swiper
            classNameâ="swiper-container"
            spaceBetween={30}
            slidesPerView={w > 768 ? 2 : 1}
            navigation
          >
            {Testimonials.map((data) => (
              <SwiperSlide key={data.id}>
                <TestimonialItem
                  desc={data.desc}
                  name={data.name}
                  org={data.org}
                  title={data.title}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div> */}
      </div>
    </TestimonialStyles>
  );
}
