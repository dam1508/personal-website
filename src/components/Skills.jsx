import React from 'react';
import skills from '../data/skills';
import SkillsEntry from './SkillsEntry';

function Skills() {
    return (
        <div className="skills">
            <h2>My skills.</h2>

            {skills.map((item) =>
                <SkillsEntry
                    key={item.key}
                    eClass={item.entryClass}
                    imgSrc={item.imageSrc}
                    imgAlt={item.imageAlt} 
                    title={item.title} 
                    content={item.content} 

                />)
            }

        </div>
    );
}

export default Skills;