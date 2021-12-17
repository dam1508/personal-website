import React from 'react';
import contact from '../data/contact';
import git from '../images/git.png';
import linkedin from '../images/linkedin.png';

function Contact(){
 return(
     <div className='contact'>
        <h2>{contact.title}</h2>
        <p >{contact.content}</p>
        <div>
        
            <a href="https://github.com/dam1508" rel='noopener noreferrer' target="_blank">
                <img src={git} alt='git icon' />
            </a>
            <a href='https://www.linkedin.com/in/damian-piotrowski-a48731228/#' rel='noopener noreferrer' target="_blank">
                <img src={linkedin} alt='linkedin icon'/>
            </a>
        </div>
        <p>{contact.mail}</p>
        <div>
            <a class="mail" href="mailto:damianp.150898@gmail.com" rel='noopener noreferrer' target='_blank'>Message</a>
        </div>
     </div>
 )


}

export default Contact;