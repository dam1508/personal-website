import React from 'react';
import Paragraph from './Paragraph';
import Skills from './Skills';
import Myhr from './Myhr';

function Info() {
    return (
        <div className='info'>
            <Paragraph pClass="about-paragraph" />
            <Myhr />
            <Skills />
            <Myhr />
        </div>
    );
}

export default Info;