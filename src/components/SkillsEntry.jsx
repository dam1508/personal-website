import React from 'react';

function SkillsEntry(props) {
    return (
        
            <div className={props.eClass}>
                <img src={props.imgSrc} alt={props.imgAlt} />
                <div >
                    <h3>{props.title}</h3>
                    <p>{props.content}</p>
                </div>
            </div>
    );
}

export default SkillsEntry;