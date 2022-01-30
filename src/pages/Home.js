import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServiceSection from '../components/ServiceSection';
import ProjectsSection from '../components/ProjectsSection';
import TestimonialSection from '../components/TestimonialSection';
import Footer from '../components/Footer';
import Banner from '../components/Banner';

export default function Home() {
  const [w, setW] = useState(window.innerWidth);

  function reSize() {
    setW(window.innerWidth);
  }

  window.addEventListener('resize', reSize);

  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <ProjectsSection w={w} />
      <TestimonialSection />
      <Banner />
    </div>
  );
}
