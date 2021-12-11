import React from 'react';
import header from '../data/header';
import myPicture from '../images/damian.png';

function Header(props) {
    return (
        <header className="app-header">
            <h1>{header.text}</h1>
            <div>
                <img src={myPicture} alt="picture of me" />
            </div>
        </header>
    );
}

export default Header;