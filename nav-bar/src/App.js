import React from 'react';
import Navbar from './components/Navbar';
import Section from './components/Section';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Section id="home" title="Home Section" background="#ddd" />
      <Section id="about" title="About Section" background="#f2f2f2" />
      <Section id="services" title="Services Section" background="#ddd" />
      <Section id="contact" title="Contact Section" background="#f2f2f2" />
    </>
  );
}

export default App;
