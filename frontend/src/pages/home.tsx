import React from 'react';
import Nav from '../Components/nav';
import Turf from '../Components/turf';
import Footer from '../Components/footer';
import Hero from '../Components/hero';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <Hero />
      <Turf />
      <Footer />
    </div>
  );
};

export default Home;