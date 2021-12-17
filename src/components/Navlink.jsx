import React from 'react';
import { Link } from 'react-scroll';

function Navlink(props){
    return (
        <Link to={props.target} smooth={true} offset={props.offset}>
            <p>{props.text}</p>
        </Link>
    );
}

export default Navlink;