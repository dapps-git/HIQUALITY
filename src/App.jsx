import React from 'react';
import TopTicker from './components/TopTicker';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ProductGallery from './components/ProductGallery';
import DpfCleaning from './components/DpfCleaning';
import FaqSection from './components/FaqSection';
import ContactFooter from './components/ContactFooter';

export default function App() {
  return (
    <div className="app-root">
      {/* Stats ticker sits above the sticky navbar */}
      <TopTicker />
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <ProductGallery />
        <DpfCleaning />
        <FaqSection />
      </main>
      <ContactFooter />
    </div>
  );
}
