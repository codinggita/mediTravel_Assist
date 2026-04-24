import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Trust from '../components/Trust';
import Features from '../components/Features';
import Recommendations from '../components/Recommendations';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Trust />
        <Features />
        <Recommendations />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
