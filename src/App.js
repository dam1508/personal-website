import React from 'react';
import Header from './components/Header';
import Paragraph from './components/Paragraph';

function App() {
  return (
    <div>
      <Header headerText="Hi, I'm Damian" />
      <Paragraph pClass="about-paragraph"/>
    </div>
  );
}

export default App;
