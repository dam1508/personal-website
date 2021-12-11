import React from 'react';
import about from '../data/about';

function Paragraph(props) {
    return (<div className={props.pClass}>
        <h2>{about.title}</h2>
        <p >
           {about.content}
        </p>
        </div>
    );
}

export default Paragraph;