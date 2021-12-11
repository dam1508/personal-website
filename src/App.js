import React from 'react';
import Header from './components/Header';
import Info from './components/Info';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Element } from 'react-scroll';
import './fonts/fonts.css';

function App() {


  
  return (
    <div>
      <Navbar />
      <Element name='home'><Header /></Element>
      <Info />
      <Footer />
    </div>
  );
}

export default App;
