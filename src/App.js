import React from 'react';
import Header from './components/Header';
import Paragraph from './components/Paragraph';
import Skills from './components/Skills';
import about from './data/about';

function App() {


  
  return (
    <div>
      <Header headerText="Hi, I'm Damian." />
      <Paragraph title={about.title} content={about.content} pClass="about-paragraph"/>
      <Skills />
    </div>
  );
}

export default App;
