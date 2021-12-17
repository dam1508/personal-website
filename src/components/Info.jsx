import React from 'react';
import {Element} from 'react-scroll';
import Paragraph from './Paragraph';
import Skills from './Skills';
import Contact  from './Contact';
import Myhr from './Myhr';

function Info() {
    return (
        <div className='info'>
            <Element name='about'><Paragraph /></Element>
            <Myhr />
            <Element name='skills'><Skills /></Element>
            <Myhr />
            <Element name='contact'><Contact /></Element>
        </div>
    );
}

export default Info;