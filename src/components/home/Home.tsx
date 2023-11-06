import React from 'react';
import TopSection from '../TopSection';
import About from '../about/About';
import Clients from '../clients/Clients';
import Expertise from '../expertise/Expertise';
import Footer from '../footer/Footer';
import Services from '../services/Services';
import Testimonial from '../testimonials/Testimonial';
import WhyUs from '../why-us/WhyUs';

const Home = () => {
  return (
    <div>
        <TopSection />
        <About />
        <Services />
        <WhyUs />
        <Expertise />
        <Testimonial />
        <Clients />
        <Footer />
    </div>
  )
}

export default Home