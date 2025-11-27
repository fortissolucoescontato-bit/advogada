import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import PracticeAreas from './components/PracticeAreas';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <PracticeAreas />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;

