import React from 'react';
import myPicture from '../images/damian.png';

function Header(props) {
    return (
        <header className="App-header">
            <img src={myPicture} alt="picture of me" />
            <h1>{props.headerText}</h1>
        </header>
    );
}

export default Header;