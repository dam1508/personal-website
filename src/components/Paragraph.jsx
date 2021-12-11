import React from 'react';

function Paragraph(props) {
    return (<div className={props.pClass}>
        <h2>{props.title}</h2>
        <p >
           {props.content}
        </p>
        </div>
    );
}

export default Paragraph;